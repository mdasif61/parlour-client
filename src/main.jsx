import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import router from './Layout/Routes/Routes'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Context from './Shared/Context'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Context>
  </React.StrictMode>,
)
