import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [ cartItems, setCartItems] = useState(['product 1','product 2']);

  return (

    <div>
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
    </div>
  );
}

export default App;