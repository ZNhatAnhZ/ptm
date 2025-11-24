import styled from 'styled-components';
import {useColorScheme} from "../hooks/index.js";
import {DarkColorScheme} from "../constants/index.js";

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
`;

export default function Task({element, updateTask}) {
    const {colorScheme} = useColorScheme();

    return (
        <TaskItem colorscheme={colorScheme}>
            <div>{element.description}</div>
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