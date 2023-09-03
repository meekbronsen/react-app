import apiClient from "./api-client";

interface Entity{
    id: number;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // T in this conxext is called a generic type parameter
  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    const cancel = () => controller.abort();
    // putting the methods and properties in an object so that they can easily be used in the App.tsx by just calling them. Hiding the complexities
    return { request, cancel };
  }
  delete(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  create<T>(entity: T) {
    return apiClient.post( this.endpoint, entity);
  }
  update<T extends Entity>( entity: T) {
    return apiClient.patch( this.endpoint+"/" + entity.id , entity); // we pass the updatedUser user as second argument to the patch method
  }
}

const create =  (endpoint: string) => new HttpService(endpoint)

export default create;
