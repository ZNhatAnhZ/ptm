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
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [totalUsers, setTotalUsers] = useState(0);
    const [order, setOrder] = useState('asc');

    const {
        data = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['users', page, order],
        queryFn: async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${maxItemsPerPage}&_sort=name&_order=${order}`);
            setTotalUsers(response?.headers?.["x-total-count"] || 0);
            setMaxPage(Math.ceil(response?.headers?.["x-total-count"] / maxItemsPerPage))
            return response.data;
        },
    });

    useEffect(() => {
        if (Array.isArray(data) && data.length > 0) {
            const filteredUsers = typeof filter?.name === 'string' && filter?.name?.length > 0 ? data.filter(user => user.name.startsWith(filter.name)) : data
            setUsers(filteredUsers);
        }
    }, [data, filter])

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
                <div>Total number of users in the DB: {totalUsers}</div>
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
                {users.map(user => <User key={user.id} id={user.id} email={user.email} name={user.name}
                                         phone={user.phone}
                                         website={user.website}
                                         onDelete={() => deleteUser(user.id)}
                ></User>)}
            </div>
        );
    }

    return renderUserList();
}