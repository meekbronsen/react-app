// Make sure that the new state object is completely independent of the previous.
// So when using the spread operator, address is copied by reference thust will remain the same even during state change.

import {useState} from 'react'

function App() {
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const hander = () => {
    // spreading the tags and adding a new one called exciting
    setTags([...tags, 'exciting']);

    // Removing 'happy'
    setTags(tags.filter((tag) => tag !== 'happy'))

    // Updating
    setTags( tags.map((tag) => tag === 'happy' ? 'happiness' : tag))
  }
  return (
    <div>
    </div>
  );
}

// prefer a flat structure to a nested one.
export default App;