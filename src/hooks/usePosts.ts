import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

const usePosts = () => {
    return useQuery<Post[], Error>({
        queryFn: () => {
            return axios
                .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
                .then((response) => {
                    return response.data;
                });
        },
    });
};

export default usePosts;