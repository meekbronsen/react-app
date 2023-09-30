import APIClient from "./apiClient";

export interface Todos{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const apiClient = new APIClient<Todos>('/todos')

export default apiClient
