import { useQuery } from '@tanstack/react-query';
import axios from "axios"
import { CACHE_KEY_TODOS } from './constants';

export interface Todos{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const useTodos = () => {
    return useQuery<Todos[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: () => { 
            return axios
              .get<Todos[]>('https://jsonplaceholder.typicode.com/todos')
              .then((res) =>{ return res.data} );
        }
    })

}

export default useTodos;