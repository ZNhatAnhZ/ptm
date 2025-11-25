import {useLocalStorage} from "./index.js";
import {TaskArrayKey} from "../constants/index.js";

export default function useTask() {
    const [tasks, setTasks] = useLocalStorage(TaskArrayKey, []);
    const addTask = ({description, isCompleted}) => {
        setTasks([...tasks, {id: crypto.randomUUID(),description: description, isCompleted: isCompleted}])
    };
    const updateTask = ({id, newDescription, isCompleted, isDeleted}) => {
        if (isDeleted) {
            setTasks(tasks.filter(task => task.id !== id));
        } else {
            setTasks(tasks.map(task => {
                if (task.id === id) {
                    task.description = newDescription;
                    task.isCompleted = isCompleted;
                    return task;
                }
                return task;
            }));
        }
    }

    return {tasks, addTask, updateTask};
}