import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from "./pages/Home";
import { AnimalList } from "./pages/AnimalList";
import { AnimalView } from "./pages/AnimalView";
import { Error } from "./pages/Error";
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>

  },

  {
    path: "/animallist",
    element: <AnimalList></AnimalList>,

  },


  {
    path: "/albumlist/:id",
    element: <AnimalView></AnimalView>

  },

]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
