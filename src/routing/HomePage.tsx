import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Incidunt, mollitia!
      </p>
      {/* // Link component from react router when clicked will route to that component*/}
      <Link to="/users">Users</Link> 
    </>
  );
};

export default HomePage;
