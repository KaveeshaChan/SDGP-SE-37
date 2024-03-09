import "./index.css";
import Navbar from "./components/NavBar/navBar";
import { Outlet } from "react-router-dom";

function App() {
  
  

  return(
    <>
   <div>
   <Navbar/>
   
   <div className="bg-gray-900 min-h-screen min-w-screen flex flex-col">
   <Outlet/>
   </div>
   </div>
    </>
  );
  // return(
  //   <>
  //   <Navbar/>
   
  //  <div className="bg-gray-900 w-screen h-screen flex flex-col">
  //  <Outlet/>
  //  </div>
  //   </>
  // );
}

export default App;
