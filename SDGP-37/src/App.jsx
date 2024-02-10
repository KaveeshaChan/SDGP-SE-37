import "./index.css";
import Navbar from "./components/navBar";
import HomePage from "./pages/homePage";
import AppPage from "./pages/appPage";
import Contact from "./pages/contact";

function App() {
  let component;
  console.log(window.location);

  switch (window.location.pathname) {
    case "/home":
      component = <HomePage />;
      break;
    case "/app":
      component = <AppPage />;
      break;
    case "/contact":
      component = <Contact />;
      break;

    default:
      break;
  }
  return (
    <div className="bg-gray-900 w-screen h-screen flex flex-col">
      <Navbar />
      {component}
      {/* <h1 className="text-white">Vehicle Damage Detection Cost Estimation</h1> */}
    </div>
  );
}

export default App;
