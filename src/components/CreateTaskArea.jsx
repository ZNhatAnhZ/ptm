import {useState} from "react";
import styled from "styled-components";

const TaskAreaDiv = styled.div`
    background-color: #ffffff;
    border-radius: 0.5em;
    color: white;
    padding: 0.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1em;
    margin-top: 1em;
`;

export function CreateTaskArea({addTask}) {
    const [newTask, setNewTask] = useState("");

    return <TaskAreaDiv>
        <input
            value={newTask}
            style={{ width: "80%" }}
            onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={() => {
            addTask(newTask);
            setNewTask("");
        }}>+</button>
    </TaskAreaDiv>
}