import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class UserService {
  // All the logic for sending HTTP requests to the backend will be written here.
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });
    const cancel = () => controller.abort();
    // putting the methods and properties in an object so that they can easily be used in the App.tsx by just calling them. Hiding the complexities
    return { request, cancel };
  }
  deleteUser(id: number) {
    return apiClient.delete("/users/" + id);
  }

  createUser(newUser: {}) {
    return apiClient.post("/users", newUser);
  }
  updateUser(id: number, updatedUser: {}) {
    return apiClient.patch("/users/" + id, updatedUser); // we pass the updatedUser user as second argument to the patch method
  }
}

export default new UserService();
