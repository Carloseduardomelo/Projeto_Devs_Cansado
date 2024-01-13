import style from "./MobalMenu.module.css";
import { FiMenu } from "react-icons/fi";

import { useState } from "react";

const MobalMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={style.Page}>
      <button onClick={handleClick} className={style.Icon}>
        <FiMenu />
      </button>

      {open && (
        <nav className={style.Nav}>
          <ul className={style.Navlinks}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobalMenu;
