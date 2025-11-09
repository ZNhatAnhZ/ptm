import styled from 'styled-components';

const TaskItem = styled.div`
    background-color: gray;
    border-radius: 0.5em;
    color: white;
    padding: 1em 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1em;
    margin-top: 1em;
`;

const Button = styled.button`
    margin-left: 0.5em;
    margin-right: 0.5em;
`;

export function Task({element, updateTask}) {
    return (
        <TaskItem>
            <desc>{element.description}</desc>
            <div>
                {element.isCompleted ? null: <Button onClick={() => updateTask(element.description, element.description, true, false)}>✅</Button>}
                <Button onClick={() => updateTask(element.description, element.description, element.isCompleted, true)}>❌</Button>
            </div>
        </TaskItem>
    )
}