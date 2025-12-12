import {BackgroundArea, AppArea, Blog} from "../components/index.js";
import {ColorSchemeProvider} from "../contexts/index.js";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {useLocalStorage} from "../hooks/index.js";
import {BlogArrayKey} from "../constants/Enum.js";

const queryClient = new QueryClient()

const generateRandomContentList = (length = 10) => {
    let id = 0;
    return Array.from({ length }, () => ({
        content: Math.random().toString(36).substring(2, 10),
        id: id++
    }));
};

export default function BlogApp() {
    const [contents, setContents] = useLocalStorage(BlogArrayKey, generateRandomContentList());

    return (
        <QueryClientProvider client={queryClient}>
            <ColorSchemeProvider>
                <BackgroundArea>
                    <AppArea>
                        <div style={{textAlign: 'center'}}>Blog list</div>
                        {contents.map(item => <Blog content={item?.content} id={item?.id} key={item?.id}></Blog>)}
                    </AppArea>
                </BackgroundArea>
            </ColorSchemeProvider>
        </QueryClientProvider>
    )
}
