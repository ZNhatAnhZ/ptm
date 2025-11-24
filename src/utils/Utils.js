import {FilterEnum} from "../constants";

export function filterTasks(filter, element) {
    switch (filter) {
        case FilterEnum.ACTIVE:
            return !element.isCompleted;
        case FilterEnum.COMPLETED:
            return element.isCompleted;
        case FilterEnum.ALL:
        default:
            return true;
    }
}