import './navBar.css';




export default function Navbar() {

  


  // const inactiveLink = "flex gap-1 p-1";
  // const activeLink = inactiveLink + " bg-white text-gray-800 rounded-l-lg";
  // // const { pathname } = "/";

  
  return (
    <nav className="bg-gray-700 text-white pt-2.5 flex justify-between items-center text-center m-0 p-10 font-abc overflow-hidden">
      {/* <div className=""> */}
      <div className="div1">
        <a className="text-5xl no-underline font-def">FIXMATIC</a>
      </div>
      {/* <div className="flex gap-6 text-xl text-white pl-[60%] flex-wrap"> */}
      <div className='div2'>
        <ul className="text-x flex  list-none m-0 p-0 text-left  ">
          
          <li className='mr-5'><a href='/'>Home</a></li>
          <li className='mr-5'><a href='/app'>App</a></li>
          <li className='mr-5'><a href='/aboutUs'>About us</a></li>
        </ul>
        <div>
         
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}

    </nav>
  );
}
