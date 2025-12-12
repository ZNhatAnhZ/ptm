import {BackgroundArea, AppArea} from "../components/index.js";
import {ColorSchemeProvider} from "../contexts/index.js";

export default function Login() {
    return (
        <ColorSchemeProvider>
            <BackgroundArea>
                <AppArea>
                    <div>Login page</div>
                </AppArea>
            </BackgroundArea>
        </ColorSchemeProvider>
    )
}

