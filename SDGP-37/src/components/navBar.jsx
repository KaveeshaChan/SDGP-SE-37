export default function Navbar() {
  const inactiveLink = "flex gap-1 p-1";
  const activeLink = inactiveLink + " bg-white text-gray-800 rounded-l-lg";
  // const { pathname } = "/";

  return (
    <nav className="flex bg-gray-700 p-6 justify-between gap-1 items-stretch">
      {/* <div className=""> */}
      <div className="text-white text-3xl">FIXMATIC</div>
      {/* <div className="flex gap-6 text-xl text-white pl-[60%] flex-wrap"> */}
      <ul className="flex p-0 m-0 text-white gap-4">
        <li>
          <a href="/home" className="cursor-pointer">
            Home
          </a>
        </li>
        <li>
          <a href="/app" className="cursor-pointer h-full content-center p-1">
            App
          </a>
        </li>
        <li>
          <a href="/contact" className="cursor-pointer">
            Contact us
          </a>
        </li>
      </ul>
      {/* </div> */}
      {/* </div> */}
    </nav>
  );
}
