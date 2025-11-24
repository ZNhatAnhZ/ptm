import styled from "styled-components";
import {useState} from "react";
import {Statistics, FilterArea, CreateTaskArea, Task, BackgroundArea} from "./components";
import {DarkColorScheme, FilterEnum, TaskArrayKey} from "./constants";
import {useColorScheme, useLocalStorage} from "./hooks";
import {filterTasks} from "./utils";
import {ColorSchemeArea} from "./components";

const AppArea = styled.div`
    padding: 20px 32px;
    border: 1px solid ${props => props.colorscheme === DarkColorScheme ? '#ffffff' : '#242424'};
    border-radius: 1em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: auto;
`;

export default function App() {
    const {colorScheme} = useColorScheme();
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
        <BackgroundArea>
            <AppArea colorscheme={colorScheme}>
                <ColorSchemeArea/>
                <CreateTaskArea addTask={addTask}/>
                <Statistics tasks={tasks}/>
                <FilterArea setFilter={setFilter}/>
                {tasks.filter(element => filterTasks(filter, element))
                    .map((element) => <Task key={element.description} element={element} updateTask={updateTask}/>)}
            </AppArea>
        </BackgroundArea>
    )
}
