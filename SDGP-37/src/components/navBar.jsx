import './navBar.css';
export default function Navbar() {
  const inactiveLink = "flex gap-1 p-1";
  const activeLink = inactiveLink + " bg-white text-gray-800 rounded-l-lg";
  // const { pathname } = "/";

  return (
    <nav className="bg-gray-800 text-white pt-2.5 pr-2.5 flex justify-between items-center text-center m-0 p-4  ">
      {/* <div className=""> */}
      <div className="div1">
        <a href="/Home" className="text-3xl no-underline text-white">FIXMATIC</a>
      </div>
      {/* <div className="flex gap-6 text-xl text-white pl-[60%] flex-wrap"> */}
      <div className='div2'>
        <ul className="text-2xl flex list-none m-0 p-0 text-left ">
          <li><a href="/home" >Home</a></li>
          <li><a href="/app" >App</a></li>
          <li><a href="/contact" >Contact us</a></li>
        </ul>
      </div>
      {/* </div> */}
      {/* </div> */}
    </nav>
  );
}
