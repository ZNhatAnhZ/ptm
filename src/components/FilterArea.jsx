import styled from "styled-components";
import {FilterEnum} from "../constants/Enum.jsx";

const FilterAreaDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export function FilterArea({setFilter}) {
    return <FilterAreaDiv>
        <button onClick={() => {
            setFilter(FilterEnum.ALL)
        }}>All</button>
        <button onClick={() => {
            setFilter(FilterEnum.ACTIVE)
        }}>Active</button>
        <button onClick={() => {
            setFilter(FilterEnum.COMPLETED)
        }}>Completed</button>
    </FilterAreaDiv>
}