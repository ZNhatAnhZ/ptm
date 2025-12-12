import Item from "./Item.jsx";
import {Link} from "react-router-dom";

export default function Blog({content, id}) {

    return (
        <Item>
            <Link to={`${id}`}>{content}</Link>
        </Item>
    );
}