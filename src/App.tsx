// Make sure that the new state object is completely independent of the previous.
// So when using the spread operator, address is copied by reference thust will remain the same even during state change.

import {useState} from 'react'

function App() {
const [customer, setCustomer] = useState({
  name: 'John',
  address: {
    city: 'Los Angeles',
    zipCode: 19089
  }
})

const handler = () =>{
  // setting address to a new one and spreading ...customer.address inside it to make a new reference
  setCustomer({...customer, address:{ ...customer.address, /* the modify zipcode */zipCode: 95113}})
}
  return (
    <div>
    </div>
  );
}

// prefer a flat structure to a nested one.
export default App;