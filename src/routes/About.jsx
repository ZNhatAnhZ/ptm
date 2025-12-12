import {BackgroundArea, AppArea} from "../components/index.js";
import {ColorSchemeProvider} from "../contexts/index.js";

export default function About() {
    return (
        <ColorSchemeProvider>
            <BackgroundArea>
                <AppArea>
                    <div>About page</div>
                </AppArea>
            </BackgroundArea>
        </ColorSchemeProvider>
    )
}
