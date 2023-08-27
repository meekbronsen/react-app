import {useForm, FieldValues} from 'react-hook-form'


function ExpenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data: FieldValues) => {
    return data
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* description */}
      <div className="mb-3">
        <label className="form-label" htmlFor="description">
          Description
        </label>
        <input
          className="form-control"
          id="description"
          type="text"
          {...register("description", { required: true, minLength: 3 })}
        />
        {errors.description?.type === "required" && (
          <p className="text-danger">
            Description needs to atleast 3 characters
          </p>
        )}
      </div>

      {/* Amount */}
      <div className="mb-3">
        <label className="form-label" htmlFor="amount">
          Amount
        </label>
        <input
          className="form-control"
          id="amount"
          type="number"
          {...register("amount", {
            valueAsNumber: true,
            required: true,
            minLength: 3,
          })}
        />
        {errors.amount?.type === "required" && (
          <p className="text-danger"> amount required </p>
        )}
      </div>

      {/* Category */}
      <div className="mb-3">
        <label className="form-label" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          className="form-select"
          {...register("category", { required: true })}
        >
          <option value="">Choose category...</option>
          <option value="1">Groceries</option>
          <option value="2">Utilities</option>
          <option value="3">Entertainment</option>
        </select>
        {errors.category?.type === "required" && (
          <p className="text-danger">Category required</p>
        )}
      </div>

      {/* submit Button */}
      <div className="mb-3">
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
