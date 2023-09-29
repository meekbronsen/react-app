import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todos } from "./useTodos";
import axios from "axios";
import { CACHE_KEY_TODOS } from "./constants";

interface AddTodoContext{
    previousTodos: Todos[]
  }
const useAddTodo = () => {
    const queryClient = useQueryClient(); 

    const addTodo = useMutation<Todos, Error, Todos, AddTodoContext>({ 
      mutationFn: (todo: Todos) => {
        return axios
          .post<Todos>('https://jsonplaceholder.typicode.com/todos', todo)
          .then(res => { return res.data })
      },
      // Using onMutate, we are updating the query cache right away before mutation
      onMutate: (newTodo: Todos) => {
        const previousTodos = queryClient.getQueryData<Todos[]>(CACHE_KEY_TODOS) || [];
        queryClient.setQueryData<Todos[]>(CACHE_KEY_TODOS, (todos = []) => [newTodo, ...todos ]);
        return { previousTodos };
      },
  
      onSuccess: (savedTodo, newTodo)=> {
        queryClient.setQueryData<Todos[]>(CACHE_KEY_TODOS,(todos) => todos?.map((todo) => todo === newTodo ? savedTodo : todo))
      },
  
      // Context is the previous data 
      onError: (error, newTodo, context) => {
        if (!context) return;
        queryClient.setQueryData<Todos[]>(CACHE_KEY_TODOS,context.previousTodos)
      }
    })      
    return {addTodo};
}

export default useAddTodo;