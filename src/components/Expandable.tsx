import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const Expandable = ({  children, maxChar = 10 }: Props) => {
    const [ chars, setChars] = useState( false )
    const [ button, setButton] = useState( false )

    const collapse = () => {
        setChars(true)
        setButton(true)
    }
    const expand = () => {
        setChars(false)
        setButton(false)
    }
  return <div>
    { chars && children.split("").slice(0, maxChar + 1).join("") || children } 
    ...{ button && <button onClick={expand}> more </button> || <button onClick={collapse}> less </button>  }
  </div>;
};

export default Expandable;
