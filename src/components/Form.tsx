import React from "react";

const Form = () => {
  return (
    // onsubmit is an event
    // when we submit an HTML form, the form is posted to the server, so we get a full page reload.
    <form onSubmit={(event) => {
        event.preventDefault()  // calling event object's preventDefault to prevent default behaviour
        console.log('submitted')
        }} >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">username</label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary"> Submit </button>
    </form>
  );
};

export default Form;
