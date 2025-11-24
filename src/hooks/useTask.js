import {useLocalStorage} from "./index.js";
import {TaskArrayKey} from "../constants/index.js";

export default function useTask() {
    const [tasks, setTasks] = useLocalStorage(TaskArrayKey, []);
    const addTask = ({description, isCompleted}) => {
        setTasks([...tasks, {description: description, isCompleted: isCompleted}])
    };
    const updateTask = ({currentDescription, newDescription, isCompleted, isDeleted}) => {
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

    return {tasks, addTask, updateTask};
}