import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {User} from "./";
import {useEffect, useState} from "react";
import {ASC, AZ, DESC, ZA} from "../constants/Enum.js";
import styled from "styled-components";
import {useSorting} from "../hooks/index.js";
import usePagination from "../hooks/usePagination.js";
import isEqual from "lodash/isEqual";

const PaginationDev = styled.div`
    display: flex;
    margin: 0.5em 0.5em 0 0;
    justify-content: center;
`;

const searchUserByNamePrefix = (namePrefix, users) => {
    if (typeof namePrefix === 'string' && namePrefix.length > 0) {
        const filterUsers = users.filter(user => user.name.startsWith(namePrefix));
        return isEqual(users, filterUsers) ? users : filterUsers;
    }
    console.log("No filtering applied");
    return users;
}

export default function UserList({filter}) {
    const [users, setUsers] = useState([]);
    const [sortedUsers, order, setOrder] = useSorting(searchUserByNamePrefix(filter?.name, users), 'name');
    const [paginatedUsers, page, maxPage, setPage] = usePagination(sortedUsers);
    const {
        data = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            return response.data;
        },
    });

    // init data
    useEffect(() => {
        setUsers(isEqual(users, data) ? users : data);
    }, [data]);

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }

    const renderUserList = () => {
        if (isLoading) return <span>Loading...</span>
        if (isError) return <span>Error: {error.message}</span>
        return (
            <div>
                <div>Total number of users in the DB: {users.length}</div>
                <PaginationDev>
                    <button disabled={!(page > 1)} onClick={() => {
                        if (page > 1) setPage(page - 1);
                    }}>&lt;</button>
                    <div>{page}/{maxPage}</div>
                    <button disabled={!(page < maxPage)} onClick={() => {
                        if (page < maxPage) setPage(page + 1);
                    }}>&gt;</button>
                </PaginationDev>
                <button onClick={() => {
                    setOrder(order === ASC ? DESC : ASC);
                }}>Sort {order === ASC ? AZ : ZA}</button>
                {paginatedUsers.map(user => <User key={user.id}
                                                 id={user.id}
                                                 email={user.email}
                                                 name={user.name}
                                                 phone={user.phone}
                                                 website={user.website}
                                                 onDelete={() => deleteUser(user.id)}
                ></User>)}
            </div>
        );
    }

    return renderUserList();
}