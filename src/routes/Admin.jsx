import {BackgroundArea, AppArea} from "../components/index.js";
import {ColorSchemeProvider} from "../contexts/index.js";

export default function Admin() {
    return (
        <ColorSchemeProvider>
            <BackgroundArea>
                <AppArea>
                    <div>Admin page</div>
                </AppArea>
            </BackgroundArea>
        </ColorSchemeProvider>
    )
}
