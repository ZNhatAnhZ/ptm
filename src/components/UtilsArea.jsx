import styled from "styled-components";
import {useColorScheme} from "../hooks";
import {DarkColorScheme, LightColorScheme} from "../constants";
import {exportJsonTasks, importJsonTasks} from "../utils";

const UtilsAreaDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Button = styled.button`
    margin-right: 1em;
`;

export default function UtilsArea({tasks, importTasks}) {
    const {colorScheme, setColorScheme} = useColorScheme();

    return <UtilsAreaDiv>
        <Button onClick={() => setColorScheme(colorScheme === DarkColorScheme ? LightColorScheme : DarkColorScheme)}>
            {colorScheme === DarkColorScheme ? "Dark mode" : "Light mode"}
        </Button>
        <Button onClick={exportJsonTasks(tasks)}>Export data</Button>
        <input title="Import data will replace the existing data with this" type="file" accept="application/json" onChange={importJsonTasks(importTasks)}></input>
    </UtilsAreaDiv>
}