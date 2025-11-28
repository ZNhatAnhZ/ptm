import Item from "./Item.jsx";

export default function Post({id, title, body}) {
    return <Item>
        <div>Id: {id}</div>
        <div>Title: {title}</div>
        <div>Body: {body}</div>
    </Item>
}