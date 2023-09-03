import userService, { User } from "./services/user-services";
import useUsers from "./hooks/useUsers";

function App() {
  const {users, error, isLoading, setError, setUsers} = useUsers()

  // Delete request
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((i) => i.id !== user.id));

    userService.delete(user.id)
    .catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  // Add request
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {
      id: 0,
      name: "Meek",
    };
    setUsers([newUser, ...users]);

    userService.create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  // Updating users in the UI
  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update( updatedUser )
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            <p>{user.id}</p>
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                onClick={() => deleteUser(user)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
