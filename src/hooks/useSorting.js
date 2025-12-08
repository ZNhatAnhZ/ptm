import {useState} from "react";
import {ASC} from "../constants/Enum.js";

export default function useSorting(data, field) {
    const [order, setOrder] = useState(ASC);
    // sorting does not change the original data, which makes other useEffects not triggered
    const sortedUsers = Array.isArray(data) ? data.sort((a, b) => {
        if (order === ASC) {
            return a[field].localeCompare(b[field]);
        } else {
            return b[field].localeCompare(a[field]);
        }
    }) : [];
    console.log("Sorted data:", sortedUsers);
    return [sortedUsers, order, setOrder];
}