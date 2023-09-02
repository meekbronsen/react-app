import { useState } from "react";

function Playground() {
    let [count, setCount] = useState<number>(0);

  return (
    <>
      <button className="btn btn-dark" onClick={() => setCount(count-=1)} >-</button>{' '}
      <span>count:{' '+count+' '}</span>{' '}
      <button className="btn btn-dark" onClick={() => setCount(count+=1)}>+</button>
    </>
  );
}

export default Playground;

