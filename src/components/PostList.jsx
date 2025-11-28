import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Post} from "./";

export default function PostList({id}) {
    const {
        data = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['users', 'posts', id],
        queryFn: async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            return response.data;
        },
    });

    const renderPostList = () => {
        if (isLoading) {
            return <span>Loading...</span>
        }

        if (isError) {
            return <span>Error: {error?.message || 'Unknown error'}</span>
        }

        return (
            <div>
                {data.map(post => <Post key={post.id} id={post.id} title={post.title} body={post.body}></Post>)}
            </div>
        );
    }

    return renderPostList();
}