import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from './constants';
import APIClient from '../react-query/services/apiClient';
import { Todos } from '../react-query/services/todoService';
import apiClient from '../react-query/services/todoService';

const useTodos = () => {
    return useQuery<Todos[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: apiClient.get.bind(apiClient),  // Use the 'bind' to bind get method to apiClient 
    })
}

export default useTodos;