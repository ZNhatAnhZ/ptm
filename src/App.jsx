import styled from "styled-components";
import {Statistics, FilterArea, CreateTaskArea, Task, BackgroundArea, ColorSchemeArea} from "./components";
import {DarkColorScheme} from "./constants";
import {useColorScheme, useFilter, useTask} from "./hooks";
import {filterTasks} from "./utils";

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
    const {tasks, addTask, updateTask} = useTask();
    const {setFilter, filteredItems} = useFilter(tasks, filterTasks);

    return (
        <BackgroundArea>
            <AppArea colorscheme={colorScheme}>
                <ColorSchemeArea/>
                <CreateTaskArea addTask={addTask}/>
                <Statistics tasks={tasks}/>
                <FilterArea setFilter={setFilter}/>
                {filteredItems.map((element) => <Task element={element} updateTask={updateTask}/>)}
            </AppArea>
        </BackgroundArea>
    )
}
