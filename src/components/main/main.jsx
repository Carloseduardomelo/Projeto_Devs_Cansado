import style from "./main.module.css";
import FundoSala from "../../assets/fundosala.svg";
import Seta from "../../assets/Vector.svg";

const Main = () => {
  return (
    <div className={style.Page}>
      <img src={FundoSala} alt="" />
      <section className={style.Page_title}>
        <h1>Lets make your home beautiful together</h1>
        <p>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
        <button className={style.Button}>
          <img src={Seta} alt="" />
          <a href="#">Get Started</a>
        </button>
      </section>
    </div>
  );
};

export default Main;
