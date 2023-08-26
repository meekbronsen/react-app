
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// since all our validation rules have been defined in our schema, we can remove those we define inside markup

/* interface FormData{
   name: string
   age: number
} */

// Instead of interface we use
const schema = z.object({
  // The customizing the error message to be displayed
  name: z.string().min(3, {message: 'name must be atlest 3 characters'}),
  age: z.number({invalid_type_error: "Age field required"}).min(18)
})

// z.infer<typeof schema> returns a typescript type which is similar to an interface
type FormData = z.infer<typeof schema>;// so we store the type in 'type' called FormData

// Form component
const Form = () => {
  // when calling the form hook we pass a config object and set resolver to zodresolver(schema)
  const { register, handleSubmit, formState: {errors} } = useForm<FormData>({resolver: zodResolver(schema)}); 

  const onSubmit = (data: FieldValues) => console.log(data);

    return (
    <form onSubmit={ handleSubmit(onSubmit)}> 

    {/* username */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          username
        </label>
        <input
        {...register('name')} 
          id="name"
          type="text"
          className="form-control"
        />

        {/* In the error message, we don't need to hard code the message*/}
        {errors.name && <p className="text-danger"> {errors.name.message} </p> }
      </div>

      {/* age */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
        {...register('age', {valueAsNumber: true})}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger"> {errors.age.message}</p>}
      </div>

      {/* submit button */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
