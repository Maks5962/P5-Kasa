import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"
import Accueil from '/pages/Accueil.jsx'
import Apropos from '/pages/a-propos.jsx'
import NotFound from "/pages/404.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />
  },
  {
    path: "/a-propos",
    element: <Apropos />
  }, 
  {
    path: "*",
    element: <NotFound />
  }
])

function Route() {
  return <RouterProvider router={router} />
}

export default Route
