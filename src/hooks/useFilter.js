import {useState} from "react";

export default function useFilter(items, filterFn) {
    const [filter, setFilter] = useState(null);
    const filteredItems = filter ? items.filter(element => filterFn(filter, element)) : items;

    return {filter, setFilter, filteredItems};
}