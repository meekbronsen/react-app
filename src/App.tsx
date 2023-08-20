import {useState} from 'react'

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5
  })

// copying the object as an update
// const handleClick = () => {
//   const newDrink = {
//     title: drink.title,
//     price: 6
//   }
//   setDrink(newDrink)
// }

  return (
    <div>
      {drink.price}
      {/* <button onClick={handleClick}> My Button </button> */}
      {/* using the spread operator if the object being copied is extensive */}
      <button onClick={ () =>setDrink({...drink, price: 7})}> </button>
    </div>
  );
}

export default App;