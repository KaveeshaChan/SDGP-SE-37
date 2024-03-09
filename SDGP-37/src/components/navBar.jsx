import './navBar.css';



export default function Navbar() {

  


  // const inactiveLink = "flex gap-1 p-1";
  // const activeLink = inactiveLink + " bg-white text-gray-800 rounded-l-lg";
  // // const { pathname } = "/";

  
  return (
    <nav className="navbar">
      {/* <div className=""> */}
      <div className="div1">
        <a className="navbar-brand">FIXMATIC</a>
      </div>
      {/* <div className="flex gap-6 text-xl text-white pl-[60%] flex-wrap"> */}
      <div className='div2'>
        <ul className="nav-items">
          
          <li><a href='/home'>Home</a></li>
          <li><a href='/app'>App</a></li>
          <li><a href='/contact'>Contact us</a></li>
        </ul>
      </div>
      {/* </div> */}
      {/* </div> */}
    </nav>
  );
}
