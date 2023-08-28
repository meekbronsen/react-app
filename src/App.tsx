import { useEffect, useRef } from "react";

// The code below is changing something outside the component making it not a pure component. To make it pure, we move it inside useEffect()
// if (ref.current) ref.current.focus();
// We can only call the useEffect hook at the top level of our components, so we cannot call it inside loops and if statements  

function App() {
  const ref = useRef<HTMLInputElement>(null);
  
// The function that we pass inside will be called after each render
  useEffect(() =>{
    // Side Effect
    if (ref.current) ref.current.focus();
  } )

  useEffect(() => {
    document.title = 'My App'
  })
  return (
    <div>
      <input ref={ref} type="text" className="form-control" />

    </div>
  );
}

export default App;
