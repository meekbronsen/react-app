import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // A clean up function to cancel the fetch request incase the data is no longer needed
    const controller =  new AbortController()  // A new builtin class that allows to cancel or abort asynchronous operations ( DOM operations, fetch requests)
    
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {signal: controller.signal} )// the second argument is a request config object
      .then((response) => setUsers(response.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      });

    return () => controller.abort()
  }, []);
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}

export default App;
