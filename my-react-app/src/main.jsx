import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import './Header.css'
import './Grid.css'
import '../src/Headerfile/Nav.css'
import "../src/Notivation-like/Post.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyForm from './Log-Signup/RegistrationPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "Sign Up",
    element: <MyForm/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

