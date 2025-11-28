import styled from "styled-components";
import {useState} from "react";
import {Modal} from "./index.js";
import Item from "./Item.jsx";
import PostList from "./PostList.jsx";

const Button = styled.button`
    margin-left: 0.5em;
    margin-right: 0.5em;
    border: ${props => props.isHightlighted === true ? '2px solid black' : null};
`;

export default function User({id, name, email, phone, website}) {
    const [isShowDetails, setIsShowDetails] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Item>
            <div style={{display: 'flex'}}>
                <Button onClick={() => setIsShowDetails(!isShowDetails)}>+</Button>
                <span>User: {name}</span>
            </div>
            <div style={{display: isShowDetails ? 'flex' : 'none', flexDirection: 'column'}}>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>phone: {phone}</div>
                <div>website: {website}</div>
                <div>post: <Button onClick={() => setIsModalOpen(true)}>show posts</Button></div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {isModalOpen ? (<PostList id={id}></PostList>) : null}
            </Modal>
        </Item>
    );
}