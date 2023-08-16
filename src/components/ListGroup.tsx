import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New york", "San Fransisco", "Tokyo", "London", "Paris"];

  // since we are declaring a brand new function, ts compiler does not know the type of the parameter (event), so we need to specify it's datatype
  const clickHandler = (event: MouseEvent) => console.log(event); // type anototation for typescript

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li 
          key={item} 
          className="list-group-item" 
          onClick={clickHandler}>
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
