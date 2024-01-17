import style from "./intro.module.css";
import { GoArrowRight } from "react-icons/go";

const Intro = () => {
  return (
    <div className={style.Page}>
      <section className={style.Caixa}>
        <h1>Lets make your home beautiful together</h1>
        <p>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
        <a href="#">
          <button>
            Get Started <GoArrowRight />
          </button>
        </a>
      </section>
    </div>
  );
};

export default Intro;
