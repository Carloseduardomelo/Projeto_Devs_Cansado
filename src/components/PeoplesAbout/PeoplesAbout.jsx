import style from "./PeoplesAbout.module.css";

// import Pessoa1 from "../../assets/Pessoa1.svg";
// import Pessoa2 from "../../assets/Pessoa2.svg";
// import Pessoa3 from "../../assets/Pessoa3.svg";

const PeoplesAbout = () => {
  return (
    <div className={style.Box}>
      <div className={style.Infors}>
        <h2 className={style.Title}>What the People Thinks</h2>
        <h2 className={style.Title}>About Us</h2>
      </div>
    </div>
  );
};

export default PeoplesAbout;
