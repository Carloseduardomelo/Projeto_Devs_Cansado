import Logo from "../../assets/logo.svg";
import Search from "../../assets/Search.svg";

import MobalMenu from "../MobalMenu/MobalMenu";

import style from "./header.module.css";

const Header = () => {
  return (
      <div className={style.Header}>
        <div className={style.Page}>
        <div className={style.Logo}>
          <img src={Logo} className={style.Image} />
          <h1>SELHONO</h1>
        </div>
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
        <MobalMenu />
      </div>
    </div>
  );
};

export default Header;
