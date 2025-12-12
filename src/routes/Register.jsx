import {BackgroundArea, AppArea} from "../components/index.js";
import {ColorSchemeProvider} from "../contexts/index.js";

export default function Register() {
    return (
        <ColorSchemeProvider>
            <BackgroundArea>
                <AppArea>
                    <div>Register page</div>
                </AppArea>
            </BackgroundArea>
        </ColorSchemeProvider>
    )
}

