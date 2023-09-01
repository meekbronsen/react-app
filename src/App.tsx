import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // adding a try catch block to catch errors
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>( // we can put await infront of the promise to extract the response data
          "https://jsonplaceholder.typicode.com/xusers"
        );
        setUsers(response.data);
      } catch (err) {
        setError((err as AxiosError).message); // If there is an error in the promise error message will be changed
      }
    };
    fetchUsers(); // we then call it
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
