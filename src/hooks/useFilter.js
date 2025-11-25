import {useMemo, useState} from "react";
import {DefaultFilters} from "../constants/Enum.js";

export default function useFilter(items, conditions) {
    const [filter, setFilter] = useState(DefaultFilters);
    const filteredItems = useMemo(() => {
        return filter ? items.filter(element => conditions.every(filterFn => filterFn(filter, element))) : items;
    }, [filter, items]);

    return {filter, setFilter, filteredItems};
}