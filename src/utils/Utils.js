import {FilterEnum} from "../constants";

export function filterTasks(filter, element) {
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