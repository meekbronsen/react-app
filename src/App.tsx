import { useState } from "react";

function App() {
  const [ pizza, setPizza] = useState({
    product: "Spicy Pepperoni",
    ingredients:['dough', 'pepperoni']
  });
  const handler = () => {
    setPizza({...pizza, ingredients: [...pizza.ingredients, 'cheese']  })
      
  }

  return (
    <div>
      { pizza.ingredients.map((item) => <li>{item}</li> )}
      <button onClick={handler}> Add ingredient </button>
    </div>
  );
}

export default App;