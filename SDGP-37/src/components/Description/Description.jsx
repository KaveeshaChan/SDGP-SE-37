import s from "../Description/Description.module.css";

function Description(){
    return(
        <div>
            <div>
            <div className={s.descrip}>
           <p>Don't let vehiccle damages slow you down<br></br>
           Try FIXMATIC today and experience the future<br></br>
           future of hassle-free <br></br>
           damage estimation and repair!</p>
        </div>

        <div className={s.button}>
            <button className={s.mybutton}>Try our solution</button>
        </div>
        </div>
        
        
        </div>
    );
}

export default Description;
