import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

const usePosts = (userId: number | undefined) => {
    return useQuery<Post[], Error>({
        
        // Like useEffect dependecies, anytime userId changes, our query will be executed
        queryKey: userId ? ['users', userId, 'posts'] : ['posts'],
        queryFn: () => {
            return axios
                .get<Post[]>("https://jsonplaceholder.typicode.com/posts",{
                    params:{
                        userId
                    }
                })
                .then((response) => {
                    return response.data;
                });
        },
    });
};

export default usePosts;