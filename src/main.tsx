import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { AnimalList } from "./pages/AnimalList";

import { Error } from "./pages/Error";
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { Animal } from './components/Animal';
import { AnimalView } from './pages/AnimalView';

const router = createBrowserRouter([



  {
    path: "/",
    element: <AnimalList></AnimalList>,
    errorElement: <Error></Error>

  },


  {
    path: "/:id",
    element: <AnimalView></AnimalView>


  },

]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
