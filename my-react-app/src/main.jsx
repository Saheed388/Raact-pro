import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import './Header.css'
import './Grid.css'
import '../src/Headerfile/Nav.css'
import "./PostRelated/Post.css"
import ProductOwnerWall from "./Pages/ProductOwnerWall";
import RegistrationFormClient from "./Log-Signup/RegistrationFormClient.jsx"
import RegistrationFormSeller from './Log-Signup/RegistrationFormSeller.jsx'
import LoginForm from './Log-Signup/login.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "homePageRegistration",
    element:       <ProductOwnerWall />
    ,
  },

  {
    path: "clientform",
    element:       <RegistrationFormClient />
    ,
  },

  {
    path: "sellerform",
    element:       <RegistrationFormSeller />
    ,
  },

  {
    path: "login",
    element:       <LoginForm />
    ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)













 