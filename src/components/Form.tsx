import { FormEvent, useState } from "react";

const Form = () => {
    // Another way of collecting the data
    // All input elements have an onChange event that is triggered every time the user types a key stroke
    // The problem with this is, everytime a user types a character the state changes and re-rendered
    // Since input element has it's own value, it may fall out of sync with person, so to make input rely on person : value={person.name}
    // We are refering the input field as a controlled component, because it's state is entirely controlled by react.

    const [person, setPerson] = useState({
        name:'',
        age: ''
    })

    const handler = (event: FormEvent) => {
        event.preventDefault()  
        console.log(person)
    }

    return(
    <form onSubmit={handler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">username</label>
        <input value={person.name} onChange={(event) => setPerson({...person, name: event.target.value})  } id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input value={person.age} onChange={(event) => setPerson({...person, age: parseInt(event.target.value) })} id="age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary"> Submit </button>
    </form>
  );
};

export default Form;
