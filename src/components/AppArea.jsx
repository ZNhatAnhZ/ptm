import {useColorScheme} from "../hooks";
import {DarkColorScheme} from "../constants";
import styled from "styled-components";

const AppAreaDiv = styled.div`
    padding: 20px 32px;
    border: 1px solid ${props => props.colorscheme === DarkColorScheme ? '#ffffff' : '#242424'};
    border-radius: 1em;
    display: flex;
    flex-direction: column;
`;

export default function AppArea({children}) {
    const {colorScheme} = useColorScheme();

    return <AppAreaDiv colorscheme={colorScheme}>
        {children}
    </AppAreaDiv>
}