import {useContext} from "react";
import {ColorSchemeContext} from "../contexts";

export default function useColorScheme() {
    return useContext(ColorSchemeContext);
}