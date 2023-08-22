import React, { FormEvent } from "react";

const Form = () => {
    // if code in onSubmit gets complex, we can create a handler to hold all
    const handler = (event: FormEvent) => {
        event.preventDefault()  // calling event object's preventDefault to prevent default behaviour
        console.log('submitted')
    }

    return(
    <form onSubmit={handler}>
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
