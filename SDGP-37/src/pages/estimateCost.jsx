import "/src/index.css";

function EstimateCost() {
    return (
        <>
        <div className="font-abc xl">
        <h3 className="text-white ml-8 mt-6 text-lg font-bold sm:ml-10 sm:mt-6 lg:text-lg lg:mt-8 xl:mt-6 2xl:text-lg 2xl:mt-4 xl:text-lg">Damaged Areas:</h3>
        <div className="sm: w-11/12 mt-2 sm:ml-14 xl:flex xl:w-11/12 lg:flex ">
            <div className="sm:w-96 sm:ml-0 lg:w-96  sm:min-h-80 lg:mt-8 sm:mt-4 justify-between bg-[#37383A] rounded-xl xl:w-11/12 2xl:w-2/6  w-80 min-h-52 ml-8 2xl:ml-0  2xl:mt-2 ">ll</div>
            <div className="sm:mt-6 lg:mt-10 lg:ml-10 xl:ml-52 2xl:mt-20 ml-4 mt-6">
                <p className="text-white text-base lg:text-base  xl:text-lg 2xl:text-lg sm:text-xl">Vehicle brand:</p><br></br>
                <p className="text-white text-base lg:text-base xl:text-lg 2xl:text-lg sm:text-xl">Vehicle Type:</p><br></br>
                <div className="sm:flex">
                    <div >
                    <p className="text-white text-base lg:text-base xl:text-lg 2xl:text-lg sm:text-xl">Vehicle Total Estmated Cost:</p> 
                    </div>
                    <div>
                    <div className="sm:w-48 sm:ml-20 bg-[#37383A] rounded-xl min-h-16 mt-4 w-52 2xl:mt-0 2xl:ml-14  "></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sm:w-11/12 sm:ml-8 sm:mt-4 lg:mt-20 lg:min-h-44 xl:pl-10 xl:ml-14 xl:mt-10 bg-[#37383A] ml-4 w-11/12 mt-10 rounded-xl min-h-36 2xl:w-3/6 2xl:mt-4 2xl:min-h-48 xl:min-h-44 xl:w-9/12">
           <div className="sm:w-11/12 sm:pl-10 flex text-white justify-between  pt-4 2xl:pl-2 pl-4">
            <div>
                <p className="font-bold xl:text-xl 2xl:text-base text-sm">Damaged Part</p>
            </div>
            <div>
                <p className="font-bold xl:text-xl 2xl:text-base pl-8">Repair/Replace</p>
            </div>
            <div>
                <p className="font-bold xl:text-xl 2xl:text-base pl-8">Estimated Cost(RS)</p>
            </div>
           </div>
        </div>
        </div>
        </>
    );
}

export default EstimateCost;
