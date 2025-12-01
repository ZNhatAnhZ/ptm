import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {User} from "./";
import {useEffect, useState} from "react";
import {maxItemsPerPage} from "../constants/Enum.js";
import styled from "styled-components";

const PaginationDev = styled.div`
    display: flex;
    margin: 0.5em 0.5em 0 0;
    justify-content: center;
`;

export default function UserList({filter}) {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [order, setOrder] = useState('asc');

    const {
        data = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            setMaxPage(Math.ceil(response.data.length / maxItemsPerPage));
            setUsers(response.data);
            return response.data;
        },
    });

    useEffect(() => {
        if (Array.isArray(users)) {
            const searchedUsers = typeof filter?.name === 'string' && filter?.name?.length > 0 ? users.filter(user => user.name.startsWith(filter.name)) : users
            const filteredAndSortedUsers = searchedUsers.sort((a, b) => {
                if (order === 'asc') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
            const startIndex = (page - 1) * maxItemsPerPage;
            const paginatedUsers = filteredAndSortedUsers.slice(startIndex, startIndex + maxItemsPerPage);
            const maxPage = Math.max(1, Math.ceil(filteredAndSortedUsers.length / maxItemsPerPage));
            setFilteredUsers(JSON.stringify(filteredUsers) !== JSON.stringify(paginatedUsers) ? paginatedUsers : filteredUsers);
            setMaxPage(maxPage);
            if (page > maxPage) {
                setPage(maxPage);
            } else if (page < 1) {
                setPage(1);
            }
        }
    }, [data, filter, order, page, users])

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }

    const renderUserList = () => {
        if (isLoading) {
            return <span>Loading...</span>
        }

        if (isError) {
            return <span>Error: {error.message}</span>
        }

        return (
            <div>
                <div>Total number of users in the DB: {users.length}</div>
                <PaginationDev>
                    <button disabled={!(page > 1)} onClick={() => {
                        if (page > 1) {
                            setPage(page - 1);
                        }
                    }}>&lt;</button>
                    <div>{page}/{maxPage}</div>
                    <button disabled={!(page < maxPage)} onClick={() => {
                        if (page < maxPage) {
                            setPage(page + 1);
                        }
                    }}>&gt;</button>
                </PaginationDev>
                <button onClick={() => {
                    setOrder(order === 'asc' ? 'desc' : 'asc');
                }}>Sort {order === 'asc' ? 'A-Z' : 'Z-A'}</button>
                {filteredUsers.map(user => <User key={user.id} id={user.id} email={user.email} name={user.name}
                                         phone={user.phone}
                                         website={user.website}
                                         onDelete={() => deleteUser(user.id)}
                ></User>)}
            </div>
        );
    }

    return renderUserList();
}