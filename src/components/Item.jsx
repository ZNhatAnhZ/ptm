import styled from "styled-components";
import {DarkColorScheme} from "../constants/index.js";
import {useColorScheme} from "../hooks/index.js";

const ItemComponent = styled.div`
    background-color: ${props => props.colorscheme === DarkColorScheme ? 'gray' : 'white'};
    border-radius: 0.5em;
    color: ${props => props.colorscheme === DarkColorScheme ? 'white' : 'black'};;
    padding: 1em 1em;
    display: flex;
    flex-direction: column;
    align-items: first;
    justify-content: space-between;
    margin-top: 1em;
    border: ${props => props.colorscheme === DarkColorScheme ? null : '1px solid #242424'};
`;

export default function Item({children}) {
    const {colorScheme} = useColorScheme();

    return (
        <ItemComponent colorscheme={colorScheme}>
            {children}
        </ItemComponent>
    );
}