import { categories } from "../App";

function ExpenseForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select">
            <option value=""></option>
            {categories.map((i) => <option key={i} value={i}>{i}</option> )}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">submit form</button>
    </form>
  );
}

export default ExpenseForm;
