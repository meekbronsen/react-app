import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'bootstrap/dist/css/bootstrap.css'
import './components/index.css'
import Playground from './playground.tsx'

// Create new instance of the class QueryClient
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Wrap App in QueryClientProvider component */}
    <QueryClientProvider client={queryClient}>
    <App/>
    </QueryClientProvider>
  </React.StrictMode>,
)
