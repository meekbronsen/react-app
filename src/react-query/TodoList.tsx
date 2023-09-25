// We no longer need useState

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Todos{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

function TodoList() {
    
    // useQuery({ takes a config object }) 
    // useQuery returns a query object and so we destructure it.
    const { data } = useQuery({
        // After the Todo[] array in  the promise function is resolved, the data is cached against queryKey
        // With ['todos'] argument we are specifying the type of data we are fetching.
        queryKey: ['todos'], // this key is unique and it used to unlock the cabinet where the data is being stored in the backend.
        queryFn: () => { // This function is what is used to fetch data from the backend or throw an error.
            return axios
            // We should be more specific of what is expected from the promise instead of <any>.
              .get<Todos[]>('https://jsonplaceholder.typicode.com/todos')
              .then((res) =>{ return res.data} );
        }
    })

  return (
    <>
    <ul>
        {data?.map((todo) => <li key={todo.id} >{todo.title}</li> )}
    </ul>
    </>
    
  )
}

export default TodoList