import { useState } from "react";


interface ListGroupProps {
  items: string[]   // means an array of strings
  heading: string   //  heading of type string
}

function ListGroup({items, heading} : ListGroupProps) {

  // const arr = useState(-1)
  // Using array destructuring
  const [selectedIndex, setSelectedIndex] = useState(-1); // Initialize selectedIndex variable. useState returns an array with two elements inside it

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
          key={item} 
          className={ selectedIndex === index ? "list-group-item active" : "list-group-item"}
          onClick={() => {setSelectedIndex(index)}} 
          >
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
