import './assets/App.css'
import styled from "styled-components";
import {useState} from "react";
import {Statistics, FilterArea, CreateTaskArea, Task} from "./components";
import {FilterEnum, TaskArrayKey} from "./constants";
import {useLocalStorage} from "./hooks";
import {filterTasks} from "./utils";

const AppArea = styled.div`
    padding: 20px 32px;
    border: 1px solid #e0e4ea;
    border-radius: 1em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
`;

export default function App() {
    const [tasks, setTasks] = useLocalStorage(TaskArrayKey, []);
    const [filter, setFilter] = useState(FilterEnum.ALL);
    const addTask = (description) => setTasks([...tasks, {description: description, isCompleted: false}]);
    const updateTask = (currentDescription, newDescription, isCompleted, isDeleted) => {
        if (isDeleted) {
            setTasks(tasks.filter(task => task.description !== currentDescription));
        } else {
            setTasks(tasks.map(task => {
                if (task.description === currentDescription) {
                    task.description = newDescription;
                    task.isCompleted = isCompleted;
                    return task;
                }
                return task;
            }));
        }
    }

    return (
        <AppArea>
            <CreateTaskArea addTask={addTask}/>
            <Statistics tasks={tasks}/>
            <FilterArea setFilter={setFilter}/>
            {tasks.filter(element => filterTasks(filter, element))
                .map((element) => <Task element={element} updateTask={updateTask}/>)}
        </AppArea>
    )

}
