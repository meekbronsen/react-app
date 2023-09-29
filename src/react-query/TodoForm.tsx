import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { Todos } from '../hooks/useTodos';
import axios from 'axios';

interface AddTodoContext{
  previousTodos: Todos[]
}

const TodoForm = () => {
  const queryClient = useQueryClient(); 

  const addTodo = useMutation<Todos, Error, Todos, AddTodoContext>({ 
    mutationFn: (todo: Todos) => {
      return axios
        .post<Todos>('https://jsonplaceholder.typicode.com/todos', todo)
        .then(res => { return res.data })
    },
    // Using onMutate, we are updating the query cache right away before mutation
    onMutate: (newTodo: Todos) => {
      const previousTodos = queryClient.getQueryData<Todos[]>(['todos']) || [];
      queryClient.setQueryData<Todos[]>(['todos'], todos => [newTodo, ...(todos || [])]);
      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo)=> {
      queryClient.setQueryData<Todos[]>(['todos'],(todos) => todos?.map((todo) => todo === newTodo ? savedTodo : todo))
    },

    // Context is the previous data 
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todos[]>(['todos'],context.previousTodos)
    }
  })        

  const ref = useRef<HTMLInputElement>(null);
  if (ref.current) ref.current.value = '';

  return (
  <>
    { addTodo.error && <div className='alert alert-danger'> {addTodo.error.message} </div>}
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
        <button className="btn btn-primary">
          {addTodo.isLoading ? <div className="spinner-border text-light" role="status"></div>: "Add"}
        </button>
      </div>
    </form>
  </>
  );
};

export default TodoForm;
