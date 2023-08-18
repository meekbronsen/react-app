import {ReactNode} from 'react'

interface ButtonProps{
    color?: string;
    children: ReactNode;
    click: () => void
}

function Button({color ="primary", children, click}: ButtonProps) {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={click}> {children} </button>
  );
}

export default Button;
