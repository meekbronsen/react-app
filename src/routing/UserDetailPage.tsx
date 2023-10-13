import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  // useParams extracts parameters from the URL
  const param = useParams();

  // useSearchParams can be used to acces and update the querystring parameters. PLEASE NOTE: querystring parameters
  // setSearchParams function has a sideeffect where it is making updates outside the component, so call it only inside eventhandlers and useEffect()
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('name'));

  const location = useLocation(); // This Hook shows details
  
  return <p>User</p>;
};

export default UserDetailPage;
