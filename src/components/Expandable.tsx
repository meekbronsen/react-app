import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const Expandable = ({ children, maxChar = 10 }: Props) => {
  const [isExpanded, setExpand] = useState(false)
  if (children.length <= maxChar) { return <p>{ children } </p>}

  const text =  isExpanded ? children : children.substring(0, maxChar)

  return <div>
    <p> {text}... <button onClick={ () => setExpand( !isExpanded )} > { isExpanded ? 'less' : 'more'} </button></p>
  </div>;
};

export default Expandable;
