import {BackgroundArea, AppArea} from "../components/index.js";
import {ColorSchemeProvider} from "../contexts/index.js";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {Link} from "react-router-dom";

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ColorSchemeProvider>
                <BackgroundArea>
                    <AppArea>
                        <Link to='/blog'>Visit blog app</Link>
                        <Link to='/ptm'>Visit to-do app</Link>
                        <Link to='/user'>Visit user app</Link>
                        <Link to='/about'>Visit about page</Link>
                        <Link to='/contact'>Visit contact page</Link>
                        <Link to='/register'>Visit register page</Link>
                        <Link to='/login'>Visit login page</Link>
                        <Link to='/admin'>Visit admin page</Link>
                    </AppArea>
                </BackgroundArea>
            </ColorSchemeProvider>
        </QueryClientProvider>
    )
}
