import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostQuery{
    pageSize: number;
}

const usePosts = (query: PostQuery) => {
    // useInfiniteQuery to implement infinite scrolling.
    return useInfiniteQuery<Post[], Error>({
        queryKey: ['posts', query],
        // pageParam is a property in the object that react query will pass to our query function
        queryFn: ({pageParam = 1}) => { 
            return axios
                .get<Post[]>("https://jsonplaceholder.typicode.com/posts",{
                    params:{
                        _start: (pageParam - 1) * query.pageSize,
                        _limit: query.pageSize
                    }
                })
                .then((response) => {
                    return response.data;
                });
        },
        staleTime: 3 * 1000,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        // getNextPageParams takes in two parameters.
        // allPages is a 2d array. It contains the data for all pages
        getNextPageParam: (lastPage, allPages) => { // Infinite queries have function used for calculating the next page
            // When user clicks on load more, this function to get the next page will be executed.
            return allPages.length + 1; 
        }
    });
};

export default usePosts;