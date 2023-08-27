import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  datalist: object
}

function ExpenseList({ children}: Props) {
  return (

    <table className="table table-dark">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{children}</td>
            {/* <button className="btn btn-outline-light">Delete</button> */}
        </tr>
      </tbody>
    </table>
  );
}

export default ExpenseList;
