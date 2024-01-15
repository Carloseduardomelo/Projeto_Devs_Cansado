import style from "./Bedroon.module.css";
import { GoArrowRight } from "react-icons/go";

const Bedroon = () => {
  return (
    <div className={style.Quarto}>
      <div className={style.Caixa}>
        <h2>Wanna join the interno?</h2>
        <p>It is a long established fact will be distracted.</p>
        <a href="#">
          <button>Contact With Us <GoArrowRight /></button>
        </a>
      </div>
    </div>
  );
};

export default Bedroon;
