import ListGroup from './components/ListGroup'

function App(){
  const items = ["New york", "San Fransisco", "Tokyo", "London", "Paris"];

  return <div> <ListGroup items={items} heading='Cities'/> </div>
}

export default App;