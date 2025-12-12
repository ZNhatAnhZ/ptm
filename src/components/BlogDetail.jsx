import Item from "./Item.jsx";
import {AppArea, BackgroundArea} from "./index.js";
import {ColorSchemeProvider} from "../contexts/index.js";
import { useParams } from 'react-router-dom';
import {useLocalStorage} from "../hooks/index.js";
import {BlogArrayKey} from "../constants/Enum.js";

export default function BlogDetail() {
    const { blogId } = useParams();
    const [contents, setContents] = useLocalStorage(BlogArrayKey, null);
    return (
        <ColorSchemeProvider>
            <BackgroundArea>
                <AppArea>
                    <Item>
                        <div>Blog id: {blogId}</div>
                        <div>Blog content: {contents.filter(e => e.id?.toString() === blogId).map(e => e.content)}</div>
                    </Item>
                </AppArea>
            </BackgroundArea>
        </ColorSchemeProvider>
    );
}