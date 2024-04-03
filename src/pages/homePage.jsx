
import BgVideo from "../assets/video.mp4";
import { useState } from "react";
import { Menu, X } from "heroicons-react";

function HomePage() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="relative">
        <video autoPlay loop muted className="bg-vid">
          <source src={BgVideo} type="video/mp4" />
        </video>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <nav className=" text-white pt-8 flex justify-between items-center text-center m-0 p-10 font-abc overflow-hidden ">
            {/* <div className=""> */}
            <div>
              <a className="text-4xl 2xl:text-5xl no-underline font-abc ">
                FIXMATIC
              </a>
            </div>
            {/* <div className="flex gap-6 text-xl text-white pl-[60%] flex-wrap"> */}
            <div>
              <ul className="hidden sm:flex list-none m-0 p-0 text-left  ">
                <li className="mr-5 text-2xl hover:bg-slate-900 opacity-80 rounded-md px-3 py-2">
                  <a href="/">Home</a>
                </li>
                <li className="mr-5 text-2xl hover:bg-slate-900 opacity-80 rounded-md px-3 py-2">
                  <a href="/app">App</a>
                </li>
                <li className="mr-5 text-2xl hover:bg-slate-900 opacity-80 rounded-md px-3 py-2">
                  <a href="/aboutUs">About us</a>
                </li>
              </ul>
              <div onClick={handleNav} className="block sm:hidden">
                {!nav ? <Menu size={20} /> : <X size={20} />}
              </div>
              <div
                className={
                  nav
                    ? "fixed left-0 top-0 w-72 h-full bg-slate-900 border-r border-r-black-900 ease-in-out duration-500"
                    : "fixed left-[-100%]"
                }
              >
                <ul className="pt-4">
                  <li>
                    <a className="text-3xl no-underline mr-20 ">FIXMATIC</a>
                  </li>
                  <li className="p-4 border-b border-gray-400 pt- ">
                    <a href="/"></a>
                  </li>
                  <li className="p-4 border-b border-gray-400 text-lg ">
                    <a href="/">Home</a>
                  </li>
                  <li className="p-4 border-b border-gray-400 text-lg">
                    <a href="/app">App</a>
                  </li>
                  <li className="p-4 border-b border-gray-400 text-lg">
                    <a href="/aboutUs">About us</a>
                  </li>
                  <div></div>
                </ul>
              </div>
            </div>
          </nav>
          <div className="pt-20 flex flex-col     ">
            {/* <a className="text-white font-abc text-4xl md:text-7xl md:mt-[8rem] lg:mt-[9rem] 2xl:mt-[0rem] 2xl:mr-[75rem] 2xl:text-6xl">FIXMATIC</a> */}
            <div className="text-white p-10 bg-slate-800 m-5 mt-[8rem] sm:mt-[11rem] rounded-2xl md:mt-[15rem]  lg:mt-[20rem] 2xl:mt-[0rem] :mt-[10rem] 2xl:opacity-70 2xl:ml-[20rem] 2xl:mr-[20rem]">
              <h2 className="pt-0 lg:text-4xl 2xl:text-3xl">
                <b style={{ fontFamily: "Times New Roman" }}>
                  VEHICLE DAMAGE DETECTION AND COST ESTIMATION
                </b>
              </h2>
              <br />
              <p className=" lg:text-3xl 2xl:text-2xl">
                Say GOODBYE to the stress and uncertainty of assessing car
                damage. Drive with confidence knowing you have the ultimate
                companion for quick, accurate, and hassle-free vehicle damage
                assessments.
                <br />
                <br />
                Try FIXMATIC today and experience the future of hassle-free
                damage estimation and repair!
              </p>
              <div style={{ marginBottom: "20px" }}></div>
              <a href="/app">
                <button
                  className="transition ease-in-out duration-300 bg-slate-900 p-3 px-6 rounded-xl hover:text-black hover:bg-slate-300 lg:text-2xl"
                  style={{ fontFamily: "Roboto" }}
                >
                  Try our solution <span className="">----------&gt;</span>
                </button>
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );

}

export default HomePage;
