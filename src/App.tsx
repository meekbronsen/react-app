import { useState } from "react";

function App() {
  const [ game, setGame] = useState({
    id: 1,
    player:{ 
      name: "John"
    }
  });
  const handler = () => {
    setGame({ ...game, player: {...game.player, name: 'bob'}});
      
  }

  return (
    <div>
      <h1>{game.player.name}</h1>
      <button onClick={handler}> Change name</button>
    </div>
  );
}

export default App;