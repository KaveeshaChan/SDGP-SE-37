import Img1 from "../assets/img.jpg"
function HomePage(){
    return(
        <div>

            <div className=" font-abc">
            <div className="flex ">
                <div className="text-white p-32 pl-40">
                    <h2 className="text-3xl leading-10"><b>VEHICLE DEAMAGE DETECTION <br/> AND  COST ESTIMATION</b></h2><br></br>
                    <p className="leading-6 text-sm">  Say GOODBYE to the stress and uncertainty of assessing car damage. <br/> Drive with confidence knowing you have the ultimate companion <br/>
                    for quick, accurate, and hassle-free vehicle damage assessments.<br/>
                    <br/>Try FIXMATIC today and experience <br/>
                    the future of hassle-free 
                    damage estimation and repair !</p><br/>
                    
                    <a href="/app"><button className = "text-black border-solid bg-yellow-200 text-xl rounded-xl pl-5 pr-11 cursor-pointer font-def hover:bg-yellow-100" >Try our solution --------- </button></a>
                </div>
                <div className="pl-14">
                    <div ></div>
                    <img src={Img1} className=" h-96 w-96 pt-40"/>
                </div>
            </div>
            </div>
            
        </div>
        
        
        
    );
}

export default HomePage;