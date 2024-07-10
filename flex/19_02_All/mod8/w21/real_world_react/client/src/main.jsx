import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import Main from './components/Main/Main.jsx'
import GameSystemProfile from './components/GameSystemProfile/GameSystemProfile.jsx'
import SignIn from './components/SignIn/SignIn.jsx'

const router = createBrowserRouter(
  [{
    path: '/',
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [
      {path: "/", element: <Main />},
      {path: "/products/:id", element: <GameSystemProfile />},
      {path: "/signin", element: <SignIn />}
    ]

  }]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
