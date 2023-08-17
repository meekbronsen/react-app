import {ReactNode} from 'react';

interface AlertProps{
    // text: string
    // Inorder to pass text argument we use the word children and change it's type to node to identify as HTML element
    children: ReactNode;
}

const Alert = ({children}: AlertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
