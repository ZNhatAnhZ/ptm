import styled from "styled-components";
import {useColorScheme} from "../hooks/index.js";
import {DarkColorScheme, LightColorScheme} from "../constants/index.js";

const ColorSchemeAreaDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default function ColorSchemeArea() {
    const {colorScheme, setColorScheme} = useColorScheme();

    return <ColorSchemeAreaDiv>
        <button onClick={() => {
            setColorScheme(colorScheme === DarkColorScheme ? LightColorScheme : DarkColorScheme);
        }}>{colorScheme === DarkColorScheme ? "Dark mode" : "Light mode"}</button>
    </ColorSchemeAreaDiv>
}