import {useEffect, useState} from "react";
import {maxItemsPerPage} from "../constants/Enum.js";
import isEqual from "lodash/isEqual";

export default function usePagination(data) {
    const [paginatedData, setPaginatedData] = useState(data);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    console.log("data: ", data);


    useEffect(() => {
        if (page > maxPage) setPage(maxPage);
        if (page < 1) setPage(1);
    }, [page, maxPage]);

    useEffect(() => {
        const startIndex = (page - 1) * maxItemsPerPage;
        const slicedData = data.slice(startIndex, startIndex + maxItemsPerPage);
        setMaxPage(Math.max(1, Math.ceil(data.length / maxItemsPerPage)));
        setPaginatedData(isEqual(data, slicedData) ? data : slicedData);
        console.log("Paginated data:", slicedData);
    }, [data, page]);

    console.log("paginatedData: ", paginatedData);

    return [paginatedData, page, maxPage, setPage];
}