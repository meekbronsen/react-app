import { useQuery } from '@tanstack/react-query';
import axios from "axios"

export interface Todos{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const useTodos = () => {
    return useQuery<Todos[], Error>({
        queryKey: ['todos'],
        queryFn: () => { 
            return axios
              .get<Todos[]>('https://jsonplaceholder.typicode.com/todos')
              .then((res) =>{ return res.data} );
        }
    })

}

export default useTodos;