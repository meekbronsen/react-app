import React, { FormEvent, useRef } from "react";

const Form = () => {
    // useRef is another hook in react like useState. it can be used to reference a DOM element.
    // we gonna to use it to read value in a form on submission.
    
    // nameRef has a single property called current that returns the DOM element we are referencing
    const nameRef = useRef<HTMLInputElement>(null); // <HTMLInputElement> to clear the value error by showing typescript compiler which element we're referencing
    const ageRef =  useRef<HTMLInputElement>(null);
    const person = { name: '', age: 0}

    const handler = (event: FormEvent) => {
        event.preventDefault()  
        if (nameRef.current !== null)
            // console.log(nameRef.current.value) // value refers to the data inside the input field
            person.name = nameRef.current.value
        if (ageRef.current !== null)
            person.age= parseInt(ageRef.current.value) // parseInt is used to convert string into a number
        console.log(person)
    }

    return(
    <form onSubmit={handler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">username</label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button  type="submit" className="btn btn-primary"> Submit </button>
    </form>
  );
};

export default Form;
