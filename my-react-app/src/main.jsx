import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import './Header.css'
import './Grid.css'
import '../src/Headerfile/Nav.css'
import "../src/Notivation-like/Post.css"
import ProductOwnerWall from "./Pages/ProductOwnerWall";
import RagistrationPage from "./Pages/RagistrationPage";

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
    path: "RagistrationPage",
    element:       <RagistrationPage />
    ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

