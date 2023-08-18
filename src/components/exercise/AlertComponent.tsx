import {useState} from 'react';

function Alert() {

const [ style, assignStyle] = useState('') 

  return (
    <>
    <div className={`alert alert-warning alert-dismissible ${style}`} >
       Alert <button  className="btn-close" onClick={() => assignStyle('fade')}></button>
    </div>
    <button type="button" className='btn btn-primary' onClick={() => assignStyle('show')}> My Button </button>
    </>
  );
}

export default Alert;
