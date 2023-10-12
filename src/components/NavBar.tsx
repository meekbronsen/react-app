import useCounterStore from "../state-management/counter/store";

const NavBar = () => {
  // Using the arrow function as an argument, we can specify the state that this component is to keep track of.
  const counter = useCounterStore(CounterStore => CounterStore.counter);

  // We want this component to only rerender when counter changes and not max
  console.log("render NavBar")
  return (
    <div>NavBar: { counter }</div>
  )
}

export default NavBar