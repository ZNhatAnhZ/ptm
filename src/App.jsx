import {Task} from "./components/Task.jsx";
import './App.css'
import styled from "styled-components";
import {useState} from "react";
import {CreateTaskArea} from "./components/CreateTaskArea.jsx";
import {FilterArea} from "./components/FilterArea.jsx";
import {Statistics} from "./components/Statistics.jsx";
import {FilterEnum, TaskArrayKey} from "./constants/Enum.jsx";
import {filterTasks, useLocalStorage} from "./utils/Utils.jsx";

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

function App() {
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
            {CreateTaskArea({addTask})}
            {Statistics({tasks})}
            {FilterArea({setFilter})}
            {tasks.filter(element => filterTasks(filter, element))
                .map((element) => Task({element, updateTask}))}
        </AppArea>
    )

}

export default App
