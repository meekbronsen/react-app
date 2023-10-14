import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // Now since react-router catches all types of errors, it doesn't matter if it's routing error or error from the application,
  // the errorElement set will be displayed for every error. But we wan to differentiate errors from app or error from routing.

  const error = useRouteError(); // This hook catches errors
  const isRouteError = isRouteErrorResponse(error); 
  return (
    <>
      <h1>Oops...</h1>
      <p>
        {isRouteError? 'Invalid url' : 'Unexpected error'}
      </p>
    </>
  );
};

export default ErrorPage;
