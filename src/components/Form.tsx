
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3, {message: 'name must be atlest 3 characters'}),
  age: z.number({invalid_type_error: "Age field required"}).min(18)
})

type FormData = z.infer<typeof schema>;

// Form component
const Form = () => {
  // we have a property called isValid that tells if a form is valid or not
  const { register, handleSubmit, formState: {errors, isValid} } = useForm<FormData>({resolver: zodResolver(schema)}); 

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
      {/* disabling the button */}
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
