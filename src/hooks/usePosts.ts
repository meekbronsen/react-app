import { useQuery } from "@tanstack/react-query";
import axios from "axios";


interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostQuery{
    page: number;
    pageSize: number;
}

const usePosts = (query: PostQuery) => {
    return useQuery<Post[], Error>({
        
        // Like useEffect dependecies, anytime userId changes, our query will be executed
        queryKey: ['posts',query],
        queryFn: () => {
            return axios
                .get<Post[]>("https://jsonplaceholder.typicode.com/posts",{
                    params:{
                        _start: (query.page - 1) * query.pageSize,
                        _limit: query.pageSize
                    }
                })
                .then((response) => {
                    return response.data;
                });
        },
        staleTime: 3 * 1000,
        keepPreviousData: true
    });
};

export default usePosts;