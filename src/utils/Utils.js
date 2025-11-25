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

export function exportJsonTasks(tasks) {
    return () => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(new Blob([JSON.stringify(tasks)], { type: "application/json" }));
        link.download = "data.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

export function importJsonTasks(importTasks) {
    return (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedTasks = JSON.parse(event.target.result);
                importedTasks.forEach(task => {
                    if (typeof task.id !== 'string' || typeof task.description !== 'string' || typeof task.isCompleted !== 'boolean') {
                        throw new Error('Invalid task format');
                    }
                });
                importTasks(importedTasks);
            } catch (error) {
                console.error('Invalid json:', error);
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    }
}