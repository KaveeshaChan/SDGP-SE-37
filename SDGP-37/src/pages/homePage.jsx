import Img1 from "../assets/img.jpg"
function HomePage(){
    return(
        <div>

            <div className=" font-abc">
            <div className="pr-10 sm:pt-4 md:pt-4 md:p-10 md:mr-40 xl:p-14  2xl:flex  2xl:pt-20  2xl:pl-2 ">
                <div className="text-white sm: pl-10 sm: pt-8 lg:ml-10  xl:mr-52">
                    <h2 className=" text-xl sm:text-2xl md:text-3xl lg:text-3xl lg:leading-10 xl:leading-tight xl:text-3xl 2xl:text-4xl 2xl:leading-tight "><b>VEHICLE DEAMAGE DETECTION AND  COST ESTIMATION</b></h2><br/>
                    <p className=" text-base sm:text-lg md:text-lg lg:text-xl xl:text-lg  xl:leading-8 2xl:leading-8  2xl:text-lg " >  Say GOODBYE to the stress and uncertainty of assessing car damage.  Drive with confidence knowing you have the ultimate companion
                    for quick, accurate, and hassle-free vehicle damage assessments.<br/><br/>
                    Try FIXMATIC today and experience
                    the future of hassle-free 
                    damage estimation and repair !</p>
                    
                    <a href="/app"><button className = "text-black border-solid bg-yellow-200 text-xl rounded-xl mt-4 pr-8 pl-6 lg:pl-5 lg:pr-11 lg:pt-0 cursor-pointer font-def hover:bg-yellow-100 sm:pr-10 sm:pl-4 sm:text-2xl md:text-2xl md:mt-16 md:pl-4 md:pr-8 md:p-1 lg:mt-14 lg:text-2xl xl:mt-10  xl:text-xl 2xl:mt-16 2xl:text-xl" >Try our solution --------- </button></a>
                </div>
                <div className="">
                    <div ></div>
                    <img src={Img1} className="  sm: h-92 sm: w-92  pt-12 pb-14 sm: pl-6 md:w-92 md:h-92 xl:w-8/12 lg:ml-10 lg:mt-8 lg:w-11/12 xl:p-8 2xl:mt-20  2xl:w-11/12" />
                </div>
            </div>
            </div>
            
        </div>
        
        
        
    );
}

export default HomePage;