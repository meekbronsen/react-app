import axios, {CanceledError} from "axios";

const axioInstance = axios.create({ 
    baseURL: 'https://jsonplaceholder.typicode.com',
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    get = () => {
        return axioInstance.get<T[]>(this.endpoint,).then(res => res.data)
    }

    post = (data: T) => {
        return axioInstance.post<T>(this.endpoint, data).then(res => res.data)
    }
}

export default APIClient;