import Like from "./components/Like/Like";

function App() {

  const eventLike = () => console.log('liked')
  const eventUnlike = () => console.log('unliked')

  return (
    <div>
      <Like like={eventLike} unlike={eventUnlike} ></Like>
    </div>
  );
}

export default App;
