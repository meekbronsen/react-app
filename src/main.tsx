import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './components/index.css'
import Playground from './playground.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Playground/> */}
    <App/>
  </React.StrictMode>,
)
