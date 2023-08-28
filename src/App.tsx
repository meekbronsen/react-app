import { useEffect } from "react";

const connnect = () => console.log("Connecting...");
const disconnect = () => console.log("Disconnecting...");

function App() {
  useEffect(() => {
    connnect();

    // clean up code. Undos whatever the effect was doing. Like if your subscribed to something, clean up will unsubscribe.
    return () => disconnect();
  });

  return <div></div>;
}

export default App;
