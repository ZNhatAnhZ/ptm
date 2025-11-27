import styled from "styled-components";

const SearchAreaDiv = styled.div`
    display: flex;
`;

const Input = styled.input`
    margin-top: 0.5em;
    width: 100%
`;

export default function SearchArea({placeHolder, onChange}) {
    return <SearchAreaDiv>
        <Input placeholder={placeHolder} onChange={onChange}></Input>
    </SearchAreaDiv>
}