import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About.jsx';
import Experience from './component/Experience.jsx';
import Recomended from './component/Recomended.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    children:[
      {
        path: "/",
        element:<About></About>
      },
      {
        path:"/experience",
        element:<Experience></Experience>
      },
      {
        path:"/recomended",
        element:<Recomended></Recomended>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
