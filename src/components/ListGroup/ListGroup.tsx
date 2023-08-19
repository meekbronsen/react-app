import { useState } from "react";
import styles from './ListGroup.module.css'
import styled from 'styled-components'

const List = styled.ul` 
  list-style: none;
`
  
const ListItem = styled.li<ListItemProps> /* Defining the shape of the prop */` 
  padding: 5px 0;
  background: ${props => props.active ? 'blue' : 'none'}
`
interface ListItemProps{
  active: boolean;
}

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
      <List className={[styles.listGroup, styles.container].join(' ')}>
        {items.map((item, index) => (
          <ListItem
          active={index === selectedIndex} 
          key={item} 
          onClick={() => { onSelectItem(item)  
            setSelectedIndex(index)
          }} 
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
