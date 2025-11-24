import styled from "styled-components";
import {Statistics, FilterArea, CreateTaskArea, Task, BackgroundArea, ColorSchemeArea} from "./components";
import {DarkColorScheme} from "./constants";
import {useColorScheme, useFilter, useTask} from "./hooks";
import {filterPrefixDescTasks, filterStatusTasks} from "./utils";

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
    const {filter, setFilter, filteredItems} = useFilter(tasks, [filterStatusTasks, filterPrefixDescTasks]);

    return (
        <BackgroundArea>
            <AppArea colorscheme={colorScheme}>
                <ColorSchemeArea/>
                <CreateTaskArea addTask={addTask}/>
                <Statistics tasks={tasks}/>
                <FilterArea filter={filter} setFilter={setFilter}/>
                {filteredItems.map((element) => <Task key={element.description} element={element} updateTask={updateTask}/>)}
            </AppArea>
        </BackgroundArea>
    )
}
