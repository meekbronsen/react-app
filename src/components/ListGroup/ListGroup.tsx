import { useState } from "react";
import styles from './ListGroup.module.css'

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (Item:string) => void;
}

function ListGroup({items, heading, onSelectItem} : ListGroupProps) {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {/* <ul className={styles.listGroup}> */}
      <ul className={[styles.listGroup, styles.container].join(' ')}>
        {items.map((item, index) => (
          <li 
          key={item} 
          className={ selectedIndex === index ? "list-group-item active" : "list-group-item"}
          onClick={() => { onSelectItem(item) 
            setSelectedIndex(index)
          }} 
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
