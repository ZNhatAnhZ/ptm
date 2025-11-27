import styled from "styled-components";
import {DarkColorScheme} from "../constants";
import {useColorScheme} from "../hooks";

const UserItem = styled.div`
    background-color: ${props => props.colorscheme === DarkColorScheme ? 'gray' : 'white'};
    border-radius: 0.5em;
    color: ${props => props.colorscheme === DarkColorScheme ? 'white' : 'black'};;
    padding: 1em 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
    border: ${props => props.colorscheme === DarkColorScheme ? null : '1px solid #242424'};
`;

export default function User({id, name, email, phone, website}) {
    const {colorScheme} = useColorScheme();

    return (
        <UserItem colorscheme={colorScheme}>
            <div>
                {name}
            </div>
        </UserItem>
    );
}