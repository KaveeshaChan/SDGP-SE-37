import Img1 from "../assets/img.jpg"
function HomePage(){
    return(
        <div>

            <div className=" font-abc">
            <div className="sm:pt-4 sm:p-8 sm:mr-36 md:pt-4 md:p-10 md:mr-40 xl:p-14 lg:flex 2xl:flex  2xl:pt-32">
                <div className="text-white sm: pl-10 sm: pt-10   2xl:pl-20 xl:mr-52">
                    <h2 className=" text-xl sm:text-3xl md:text-3xl lg:text-4xl lg:leading-10 xl:leading-tight xl:text-3xl 2xl:text-5xl 2xl:leading-tight 2xl:mr-32"><b>VEHICLE DEAMAGE DETECTION AND  COST ESTIMATION</b></h2><br/>
                    <p className=" text-base sm:text-lg md:text-xl lg:text-xl xl:text-base  xl:leading-8 2xl:leading-8  2xl:text-2xl 2xl:mr-40" >  Say GOODBYE to the stress and uncertainty of assessing car damage.  Drive with confidence knowing you have the ultimate companion
                    for quick, accurate, and hassle-free vehicle damage assessments.<br/><br/>
                    Try FIXMATIC today and experience
                    the future of hassle-free 
                    damage estimation and repair !</p>
                    
                    <a href="/app"><button className = "text-black border-solid bg-yellow-200 text-xl rounded-xl mt-4 pr-8 pl-6 lg:pl-5 lg:pr-11 lg:pt-0 cursor-pointer font-def hover:bg-yellow-100 sm:pr-10 sm:pl-4 sm:text-2xl md:text-2xl md:mt-8 md:pl-4 md:pr-8 md:p-1 lg:mt-8 lg:text-2xl xl:mt-10  xl:text-xl 2xl:mt-10 2xl:text-3xl" >Try our solution --------- </button></a>
                </div>
                <div className="">
                    <div ></div>
                    <img src={Img1} className="  sm: h-92 sm: w-92  pt-12 pb-14 sm: pl-6 md:w-92 md:h-92 xl:w-92  xl:p-8 2xl:mt-20 " />
                </div>
            </div>
            </div>
            
        </div>
        
        
        
    );
}

export default HomePage;