import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Chicago", "San Fransisco"]

  return (
    <div>
      <ListGroup items={items} heading="States" onSelectItem={()=> console.log("Hello")}></ListGroup>
    </div>
  );
}

export default App;
