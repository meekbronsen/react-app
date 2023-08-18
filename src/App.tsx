import { useState } from 'react';
import Alert from "./components/exercise/AlertComponent";
import Button from "./components/exercise/ButtonComponent";

function App() {
  const [visibility, setVisibility] = useState(false)
  return (
    <div>
      { visibility && <Alert onClose={()=>setVisibility(false)}></Alert> }
      <Button children="My Button" click={() => setVisibility(true)} ></Button>
    </div>
  );
}

export default App;
