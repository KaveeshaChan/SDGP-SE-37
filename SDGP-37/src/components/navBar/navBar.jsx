import s from "../navBar/navBar.module.css";

function NavBar(){
    return(
        <div className={s.header}>
            <div>
            <h3>FIXMATIC</h3>
            </div>

           <div className={s.nav}> 
           <div className={s.navTopic}>
            <p>Home</p>
            </div>

            <div className={s.navTopic}>
            <p>App</p>
            </div>

            <div className={s.navTopic}>
            <p>Contact Us</p>
            </div>
           </div>
            
        </div>
    );
}

export default NavBar;