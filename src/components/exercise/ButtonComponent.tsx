import {ReactNode} from 'react'

interface ButtonProps{
    color?: string; // adding a question mark tells that this property is optional so that app.tsx does not force use to provide an argument
    // color: 'primary' | 'secondary' | 'danger' | 'success'; // Using union(|), only values listed here are acceptable if neither 
    children: ReactNode;
    click: () => void;
}

// setting default property in typescript: color ="primary"
function Button({color ="primary", children, click}: ButtonProps) {
  return (
    <button type="button" className={`btn btn-${color}` } onClick={click}> {children} </button>
  );
}

export default Button;
