import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // A clean up function to cancel fetch requests incase the data is no longer needed
    const controller = new AbortController(); // A new builtin class that allows to cancel or abort asynchronous operations ( DOM operations, fetch requests)

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      }) // the second argument is a request config object
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    // The finally method will be executed when the promise is settled (resolved or rejected). It is just here to avoid duplication of setLoading state
    // .finally(() => {setLoading(false)});

    return () => controller.abort();
  }, []);

  // Optimistic Update
  const deleteUser = (user: User) => {
      const originalUsers = [...users]

    // Updating the ui
    setUsers(users.filter((i) => i.id !== user.id));
    // Calling the server to save the changes
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        // If we catch an error, we display err.message and reset to original users list
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      {users.map((user) => (
        <ul className="list-group">
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {/* the deleteUserfunction */}
            <p>{user.id}</p>
            {user.name}
            <button
              onClick={() => deleteUser(user)}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          </li>
        </ul>
      ))}
    </>
  );
}

export default App;
