import styled from "styled-components";
import {FilterEnum} from "../constants";
import {useCallback} from "react";

const FilterAreaDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SearchAreaDiv = styled.div`
    display: flex;
`;

const Input = styled.input`
    margin-top: 0.5em;
    width: 100%
`;

export default function FilterArea({filter, setFilter}) {
    const updateFilter = useCallback((prefixDesc, status, isSearchFilter) => {
        return e => {
            if (isSearchFilter) {
                if (e.target.value !== filter.prefixDesc) {
                    setFilter({prefixDesc: e.target.value, status: status})
                }
            } else {
                if (prefixDesc !== filter.prefixDesc || status !== filter.status) {
                    setFilter({prefixDesc: prefixDesc, status: status})
                }
            }
        };
    }, [filter.prefixDesc, filter.status, setFilter]);

    return <>
        <FilterAreaDiv>
            <button onClick={updateFilter(filter.prefixDesc, FilterEnum.ALL, false)}>
                All
            </button>
            <button onClick={updateFilter(filter.prefixDesc, FilterEnum.ACTIVE, false)}>
                Active
            </button>
            <button onClick={updateFilter(filter.prefixDesc, FilterEnum.COMPLETED, false)}>
                Completed
            </button>
        </FilterAreaDiv>
        <SearchAreaDiv>
            <Input placeholder="Search tasks here" onChange={updateFilter(filter.prefixDesc, filter.status, true)}></Input>
        </SearchAreaDiv>
    </>;
}