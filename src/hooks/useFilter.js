import {useState} from "react";
import {DefaultFilters} from "../constants/Enum.js";

export default function useFilter(items, conditions) {
    const [filter, setFilter] = useState(DefaultFilters);
    const filteredItems = filter ? items.filter(element => conditions.every(filterFn => filterFn(filter, element))) : items;

    return {filter, setFilter, filteredItems};
}