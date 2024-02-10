import Img1 from "../assets/img.jpg"
function HomePage(){
    return(
        <div>

            <div className="flex ">
                <div className="text-white p-40 text-2xl font-sans">
                    <h2>VEHCILE DEAMAGE DETECTION <br/>AND COST ESTIMATION</h2><br></br>
                    <p>Don't let vehiccle damages slow you down.<br/>
                    Try FIXMATIC today and experience <br/>
                    the future of hassle-free <br/>
                    damage estimation and repair !</p><br/>
                    
                    <a href="/app"><button className = "text-black border-solid bg-yellow-200 text-xl rounded-xl pl-5 pr-11 cursor-pointer" >Try our solution --------- </button></a>
                </div>
                <div className="pt-8 pl-14">
                    <div ></div>
                    <img src={Img1} className=" h-96 w-96 pt-44"/>
                </div>
            </div>
            
        </div>
        
        
        
    );
}

export default HomePage;