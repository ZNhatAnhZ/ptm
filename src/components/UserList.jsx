import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {User} from "./";

export default function UserList({filter}) {
    const {
        data,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['users', filter],
        queryFn: async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
        },
    });

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div>
            {data
                .filter(user => filter.name.length > 0 ? user.name.startsWith(filter.name) : true)
                .map(user => <User key={user.id} id={user.id} email={user.email} name={user.name} phone={user.phone}
                                      website={user.website}></User>)}
        </div>
    );
}