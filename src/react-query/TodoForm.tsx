import { useRef } from 'react';
import useAddTodo from '../hooks/useAddTodo';

const TodoForm = () => {

  const ref = useRef<HTMLInputElement>(null);
  if (ref.current) ref.current.value = '';

  const {addTodo} = useAddTodo()

  return (
  <>
    { addTodo.error && <div className='alert alert-danger'> {addTodo.error.message} </div>}
    <form className="row mb-3" onSubmit={(event) => {
      event.preventDefault();

      if (ref.current && ref.current.value){
      addTodo.mutate({
        id: 0,
        title: ref.current.value,
        completed: false,
        userId: 1
      })}
    }} >
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">
          {addTodo.isLoading ? <div className="spinner-border text-light" role="status"></div>: "Add"}
        </button>
      </div>
    </form>
  </>
  );
};

export default TodoForm;
