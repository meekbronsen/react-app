import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { Todos } from '../hooks/useTodos';
import axios from 'axios';

const TodoForm = () => {
  const queryClient = useQueryClient(); // Used to get access to the QueryClient.
  const addTodo = useMutation({ // This is a mutation Hook from react query.
    mutationFn: (todo: Todos) => {
      return axios
        .post<Todos>('https://jsonplaceholder.typicode.com/todos', todo)
        .then(res => { return res.data})
    },
    // onSuccess: // Is called if the request goes well
    // onError: // If something goes wrong
    // onSettled: // whether the request is succesful or not
    onSuccess: ( data, newTodo )  => {// data is the object that we get from the backend, newTodo is the object that we send to the server
      // You could Invalidate the cache here inorder to get the updated version
      // return queryClient.invalidateQueries({
      //   queryKey: ['todos'] // will invalidate all queries whose start with todo
      // })

      // You could update the data in the cache directly
      return queryClient.setQueryData<Todos[]>(['todos'], todos => [data, ...(todos || []) ] )
    }
  })        
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form className="row mb-3" onSubmit={(event) => {
      event.preventDefault();

      if (ref.current && ref.current.value){
      addTodo.mutate({
        id: 0,
        title: ref.current.value,
        completed: false,
        userId: 1
      })}
    }} >
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
