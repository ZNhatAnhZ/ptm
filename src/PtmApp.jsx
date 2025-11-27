import {Statistics, FilterArea, CreateTaskArea, Task, BackgroundArea, UtilsArea, AppArea} from "./components";
import {useFilter, useTask} from "./hooks";
import {filterPrefixDescTasks, filterStatusTasks} from "./utils";
import {ColorSchemeProvider} from "./contexts/index.js";

export default function PtmApp() {
    const {tasks, addTask, updateTask, importTasks} = useTask();
    const {filter, setFilter, filteredItems} = useFilter(tasks, [filterStatusTasks, filterPrefixDescTasks]);

    return (
        <ColorSchemeProvider>
            <BackgroundArea>
                <AppArea>
                    <UtilsArea tasks={tasks} importTasks={importTasks}/>
                    <CreateTaskArea addTask={addTask}/>
                    <Statistics tasks={tasks}/>
                    <FilterArea filter={filter} setFilter={setFilter}/>
                    {filteredItems.map((element) => <Task key={element.id} element={element} updateTask={updateTask}/>)}
                </AppArea>
            </BackgroundArea>
        </ColorSchemeProvider>
    )
}
