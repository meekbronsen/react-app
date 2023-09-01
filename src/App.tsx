import axios from "axios";
import { useEffect, useState } from "react";

// Adding autocompletion and type saftey using typescript/
interface User{
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then(response => console.log(response.data[0].name));
    // instead of console.log
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then(response => setUsers(response.data));
  }, []);
  return <div>
    {users.map((user) => <li key={user.id}>{ user.name }</li> )}
  </div>;
}

export default App;
