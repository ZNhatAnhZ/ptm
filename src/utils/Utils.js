import {FilterEnum} from "../constants";

export function filterStatusTasks(filter, element) {
    switch (filter.status) {
        case FilterEnum.ACTIVE:
            return !element.isCompleted;
        case FilterEnum.COMPLETED:
            return element.isCompleted;
        case FilterEnum.ALL:
        default:
            return true;
    }
}

export function filterPrefixDescTasks(filter, element) {
    return element.description.startsWith(filter.prefixDesc);
}