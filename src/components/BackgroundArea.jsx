import styled from "styled-components";
import {useColorScheme} from "../hooks";
import {DarkColorScheme} from "../constants";

const BackgroundDiv = styled.div`
    background-color: ${props => props.colorscheme === DarkColorScheme ? '#242424' : '#FFFFFF'};
    color: ${props => props.colorscheme === DarkColorScheme ? '#FFFFFF' : '#242424'};
    display: flex;
    min-height: 100vh;
    min-width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function BackgroundArea({children}) {
    const {colorScheme} = useColorScheme();

    return <BackgroundDiv colorscheme={colorScheme}>
        {children}
    </BackgroundDiv>;
}