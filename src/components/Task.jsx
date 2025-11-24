import styled from 'styled-components';
import {useColorScheme} from "../hooks/index.js";
import {DarkColorScheme} from "../constants/index.js";
import {useRef, useState} from "react";

const TaskItem = styled.div`
    background-color: ${props => props.colorscheme === DarkColorScheme ? 'gray' : 'white'};
    border-radius: 0.5em;
    color: ${props => props.colorscheme === DarkColorScheme ? 'white' : 'black'};;
    padding: 1em 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
    border: ${props => props.colorscheme === DarkColorScheme ? null : '1px solid #242424'};
`;

const Button = styled.button`
    margin-left: 0.5em;
    margin-right: 0.5em;
    border: ${props => props.isHightlighted === true ? '2px solid black' : null};
`;

export default function Task({element, updateTask}) {
    const {colorScheme} = useColorScheme();
    const [currentTaskDesc, setCurrentTaskDesc] = useState(element.description);
    const [enableEdit, setEnableEdit] = useState(false);
    const inputRef = useRef(null);

    return (
        <TaskItem colorscheme={colorScheme}>
            <Button title="click to allow edit, reclick to apply the edit" onClick={() => {
                if (enableEdit) {
                    setEnableEdit(false);
                    updateTask({
                        currentDescription: element.description,
                        newDescription: currentTaskDesc,
                        isCompleted: element.isCompleted,
                        isDeleted: element.isDeleted
                    })
                } else {
                    setEnableEdit(true);
                    inputRef.current.focus();
                }
            }} isHightlighted={enableEdit}>&#x270E;</Button>
            <input ref={inputRef} value={currentTaskDesc} readOnly={!enableEdit} onChange={e => {
                setCurrentTaskDesc(e.target.value);
            }}></input>
            <div>
                {element.isCompleted ? null: <Button onClick={() => updateTask({
                    currentDescription: element.description,
                    newDescription: element.description,
                    isCompleted: true,
                    isDeleted: element.isCompleted
                })}>✅</Button>}
                <Button onClick={() => updateTask({
                    currentDescription: element.description,
                    newDescription: element.description,
                    isCompleted: element.isCompleted,
                    isDeleted: true
                })}>❌</Button>
            </div>
        </TaskItem>
    )
}