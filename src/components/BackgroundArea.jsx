import styled from "styled-components";
import {useColorScheme} from "../hooks";
import {DarkColorScheme, DefaultColorScheme} from "../constants";

const BackgroundDiv = styled.div`
    color-scheme: ${props => props.colorscheme || DefaultColorScheme};
    background-color: ${props => props.colorscheme === DarkColorScheme ? '#242424' : '#FFFFFF'};
    color: ${props => props.colorscheme === DarkColorScheme ? '#FFFFFF' : '#242424'};
    display: flex;
    width: 100vw;
    height: 100vh;
    margin: 0;
`;

export default function BackgroundArea({children}) {
    const {colorScheme} = useColorScheme();

    return <BackgroundDiv colorscheme={colorScheme}>
        {children}
    </BackgroundDiv>;
}