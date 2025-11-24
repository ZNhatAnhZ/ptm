import {DefaultColorScheme} from "../constants";
import {ColorSchemeContext} from "./ColorSchemeContext.js";
import {useLocalStorage} from "../hooks/index.js";
import {ColorSchemeKey} from "../constants/Enum.js";

export function ColorSchemeProvider({children}) {
    const [colorScheme, setColorScheme] = useLocalStorage(ColorSchemeKey, DefaultColorScheme);

    return (
        <ColorSchemeContext value={{colorScheme, setColorScheme}}>
            {children}
        </ColorSchemeContext>
    );
}