import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'bootstrap/dist/css/bootstrap.css'
import './components/index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {  // Configuring default settings for our queries globally
      retry: 3,   // the default value of retry is 3
      cacheTime: 300_000, // If a query has no observer(a component that using the query), this time is set for how long before it's garbage collected.
      staleTime: 3 *1000, // How long the data is considered fresh. default setting 0, means that the moment data arrives it is considered old
      // React query automatically refreshes stale data 
            // When the network is reconnected, 
            // When a component is mounted, 
            // When the window is refocused. if you open another window the get back to that window, react query will refetch data.
      refetchOnWindowFocus: false, // to refetch data on window refocus
      refetchOnMount: false,
      refetchOnReconnect: false
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App/>
    <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
)
