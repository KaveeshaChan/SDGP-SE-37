import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomePage from './pages/homePage.jsx';
import AppPage from './pages/appPage.jsx';
import EstimateCost from './pages/estimateCost.jsx';
import Contact from './pages/contact.jsx';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     element:<App />,
//     children:[
//       {
//         path:"/home",
//         element:<HomePage/>,
//       },
//       {
//         path:"/app",
//         element:<AppPage/>
//       },

//       {
//         path:"/estmatedCost",
//         element:<EstimateCost/>
//       },

//       {
//         path:"/contact",
//         element:<Contact/>
//       }
//     ],
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  {/* <RouterProvider router={router}/>   */}
  </React.StrictMode>
)
