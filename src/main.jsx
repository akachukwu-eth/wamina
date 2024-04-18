import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ServicesPage from './Components/ServicesPage.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/services", element: <ServicesPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
