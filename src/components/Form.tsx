// Validating forms using react hook forms and logging errors.

// formState: {errors} nested destructuring
// 'errors.name?.type' the question ' ?.type' is called optional chaining in js

import { useForm } from "react-hook-form";

// to help with autocompletion of our error object we need to define the shape of this form using interface
interface FormData{
  name: string
  age: number
}

const Form = () => {
  // Grab a property called form state from useForm obj. It monitors the state of the form
  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

  // console.log(formState.errors)  // logs an object with properties like {name, message: ""  type: 'minlength'} etc if there is an error
  console.log(errors)


  const onSubmit = (data: FieldValues) => console.log(data);

    return (
    <form onSubmit={ handleSubmit(onSubmit)}> 

    {/* username */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          username
        </label>
        <input
        {...register('name',{required: true , minLength: 3})} // is like updating objects by adding attributes
          id="name"
          type="text"
          className="form-control"
        />

        {/* Error message to be displayed */}
        {errors.name?.type === 'required' && <p className="text-danger"> username is required</p> }
        {errors.name?.type === 'minLength' && <p className="text-danger"> must be atleast 3 characters</p>}
      </div>

      {/* age */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
        {...register('age')}
          id="age"
          type="number"
          className="form-control"
        />
      </div>

      {/* submit button */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
