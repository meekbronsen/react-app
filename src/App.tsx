// As good developers we should anticipate errors and handle them properly
// Handling of errors generated from server requests

import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((response) => setUsers(response.data))
      // adding the catch method to catch errors
      .catch((err) => setError(err.message));
  }, []);
  return (
    <div>
      { error && <p className="text-danger">{error}</p>}
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}

export default App;
