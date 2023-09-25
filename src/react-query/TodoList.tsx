// We no longer need useState
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useTodos from '../hooks/useTodos'

function TodoList() {
    const { data, error, isLoading} = useTodos()
    
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

  return (
    <>
    <ul className="list-group">
        {data?.map((todo) => <li className="list-group-item" key={todo.id} >{todo.title}</li> )}
    </ul>
    </>
    
  )
}

export default TodoList