import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.scss'

import { AnimalList } from "./pages/AnimalList";

import { Error } from "./pages/Error";
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { Animal } from './components/Animal';
import { AnimalView } from './pages/AnimalView';
import { Home } from "./pages/Home"

const router = createBrowserRouter([



  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>

  },

  {
    path: "/animals",
    element: <AnimalList></AnimalList>


  },


  {
    path: "/animals/:id",
    element: <AnimalView></AnimalView>


  },

]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
