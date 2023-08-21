import { useState } from "react";
import Expandable from "./components/Expandable";

function App() {
  
  return (
    <div>
      <Expandable maxChar={20} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quis
        accusamus, dignissimos itaque voluptatibus vero veniam amet repellat
        culpa porro, sint asperiores quam, distinctio iure quos fuga cupiditate
        iste in delectus! Sint beatae aspernatur illum ex quas cum vitae harum,
        placeat officiis a odio sequi quia magnam debitis, perspiciatis
        repellat?
      </Expandable>
    </div>
  );
}

export default App;
