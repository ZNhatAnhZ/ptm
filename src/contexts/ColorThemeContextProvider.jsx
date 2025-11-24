import {useState} from 'react';
import {DefaultColorScheme} from "../constants";
import {ColorSchemeContext} from "./ColorSchemeContext.js";

export function ColorSchemeProvider({children}) {
    const [colorScheme, setColorScheme] = useState(DefaultColorScheme);

    return (
        <ColorSchemeContext value={{colorScheme, setColorScheme}}>
            {children}
        </ColorSchemeContext>
    );
}