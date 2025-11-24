import styled from "styled-components";
import {FilterEnum} from "../constants";

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
    return <>
        <FilterAreaDiv>
            <button onClick={() => {
                setFilter({prefixDesc: filter.prefixDesc, status: FilterEnum.ALL})
            }}>All
            </button>
            <button onClick={() => {
                setFilter({prefixDesc: filter.prefixDesc, status: FilterEnum.ACTIVE})
            }}>Active
            </button>
            <button onClick={() => {
                setFilter({prefixDesc: filter.prefixDesc, status: FilterEnum.COMPLETED})
            }}>Completed
            </button>
        </FilterAreaDiv>
        <SearchAreaDiv>
            <Input placeholder="Search tasks here" onChange={e => {
                setFilter({prefixDesc: e.target.value, status: filter.status})
            }}></Input>
        </SearchAreaDiv>
    </>;
}