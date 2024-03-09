import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomePage from './pages/homePage.jsx';
import AppPage from './pages/appPage.jsx';
import EstimateCost from './pages/estimateCost.jsx';
import AboutUs from './pages/aboutUs.jsx';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    element:<App />,
    children:[
      {
        path:"/",
        element:<HomePage/>,
      },
      {
        path:"/app",
        element:<AppPage/>
      },

      {
        path:"/estmatedCost",
        element:<EstimateCost/>
      },

      {
        path:"/aboutUs",
        element:<AboutUs/>
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>  
  </React.StrictMode>
)

