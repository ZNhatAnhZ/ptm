import {useEffect, useState} from "react";
import {FilterEnum} from "../constants/Enum.jsx";

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = globalThis.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            globalThis.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.log(error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

function filterTasks(filter, element) {
    switch (filter) {
        case FilterEnum.ALL:
            return true;
        case FilterEnum.ACTIVE:
            return !element.isCompleted;
        case FilterEnum.COMPLETED:
            return element.isCompleted;
        default:
            return null;
    }
}

export {useLocalStorage, filterTasks};