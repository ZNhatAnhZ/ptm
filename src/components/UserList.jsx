import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {User} from "./";
import {useEffect, useState} from "react";

export default function UserList({filter}) {
    const [users, setUsers] = useState([]);
    const {
        data = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
        },
    });

    useEffect(() => {
        if (Array.isArray(data) && data.length > 0) {
            const filteredUsers = typeof filter?.name === 'string' && filter?.name?.length > 0 ? data.filter(user => user.name.startsWith(filter.name)) : data
            setUsers(filteredUsers);
        }
    }, [data, filter])

    const renderUserList = () => {
        if (isLoading) {
            return <span>Loading...</span>
        }

        if (isError) {
            return <span>Error: {error.message}</span>
        }

        return (
            <div>
                <div>Number of users: {users.length}</div>
                {users.map(user => <User key={user.id} id={user.id} email={user.email} name={user.name}
                                         phone={user.phone}
                                         website={user.website}></User>)}
            </div>
        );
    }

    return renderUserList();
}