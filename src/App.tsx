// When our button is clicked, we want to mark Bug as fixed

import {useState} from 'react'

function App() {
  const [bugs, setBugs] = useState([
    {id:1, title: 'Bug 1', fixed: false},
    {id:2, title: 'Bug 2', fixed: false}

  ]);

  const hander = () => {
      setBugs( bugs.map((bug) => bug.id === 1 ? {...bug, fixed: true} : bug ))
  }
  return (
    <div>
    </div>
  );
}

// prefer a flat structure to a nested one.
export default App;