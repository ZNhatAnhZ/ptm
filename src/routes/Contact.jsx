import {BackgroundArea, AppArea} from "../components/index.js";
import {ColorSchemeProvider} from "../contexts/index.js";

export default function Contact() {
    return (
        <ColorSchemeProvider>
            <BackgroundArea>
                <AppArea>
                    <div>Contact page</div>
                </AppArea>
            </BackgroundArea>
        </ColorSchemeProvider>
    )
}
