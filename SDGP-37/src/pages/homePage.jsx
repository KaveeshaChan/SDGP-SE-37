import Img1 from "../assets/img1.jpg";

function HomePage() {
    return (
        <div>
            <div className="font-abc bg-gray-700 text-white" style={{ backgroundColor: "#444548" }}>
                <div className="flex justify-between pr-10 sm:pt-4 md:pt-4 md:p-10 md:mr-40 xl:p-14 2xl:flex 2xl:pt-20 2xl:pl-2">
                    <div className="text-white sm:pl-10 sm:pt-8 lg:ml-10 xl:mr-52">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl lg:leading-10 xl:leading-tight xl:text-3xl 2xl:text-4xl 2xl:leading-tight">
                            <b style={{ fontFamily: "Times New Roman" }}>VEHICLE DAMAGE DETECTION AND COST ESTIMATION</b>
                        </h2><br />
                        <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-lg xl:leading-8 2xl:leading-8 2xl:text-lg">
                            Say GOODBYE to the stress and uncertainty of assessing car damage. Drive with confidence knowing you have the ultimate companion
                            for quick, accurate, and hassle-free vehicle damage assessments.<br /><br />
                            Try FIXMATIC today and experience the future of hassle-free damage estimation and repair!
                        </p>
                        <div style={{ marginBottom: "20px" }}></div> {/* Add a space between description and button */}
                        <a href="/app">
                            <button className="font-roboto text-white border-solid bg-black text-xl rounded-xl pl-8 pr-14 py-3 cursor-pointer font-def hover:bg-gray-600" style={{ fontFamily: "Roboto" }}>
                                Try our solution <span className="text-lg">----------&gt;</span>
                            </button>
                        </a>
                    </div>
                    <div>
                        <img src={Img1} className="sm:h-auto sm:w-full sm:pl-6 mt-8" alt="Vehicle Damage" /> {/* Set height to auto to maintain aspect ratio */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
