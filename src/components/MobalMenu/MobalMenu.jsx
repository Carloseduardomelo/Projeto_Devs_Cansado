import Search from "../../assets/Search.svg";
import style from "./MobalMenu.module.css";

const MobalMenu = () => {
    return (
        <nav className={style.Nav}>
            <ul className={style.Navlinks}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <img src={Search} />
            </ul>
        </nav>
    );
};

export default MobalMenu;