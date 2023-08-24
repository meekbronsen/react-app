// Managing Forms with react hook form
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  // const form = useForm() // calling useform to get a form object
  const { register, handleSubmit } = useForm(); // Destructring the form object --form.register() = register
  // console.log(register("age")); // this shows that register is an object with four attributes

  const onSubmit = (data: FieldValues) => console.log(data)  // since typescript does not recognize 'data', we add FieldValues to ref

    return (
    // <form onSubmit={ handleSubmit((data) => console.log(data) )}> {/* handleSubmit() takes a submit-handler, it recives the data filled in the form*/}
    <form onSubmit={ handleSubmit(onSubmit) }> 
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          username
        </label>
        <input
        {...register('name')}  // spreading the register object. All the four attributes will be added to this input field
          id="name"
          type="text"
          className="form-control"
        />
      </div>
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
      <button type="submit" className="btn btn-primary">
        {" "}
        Submit{" "}
      </button>
    </form>
  );
};

export default Form;
