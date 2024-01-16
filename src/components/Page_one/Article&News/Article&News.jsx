import style from "./Article&News.module.css";

import Cozinha1 from "../../../assets/cozinha1.svg";
import Cozinha2 from "../../../assets/cozinha2.svg";
import Cozinha3 from "../../../assets/cozinha3.svg";

import { BsChevronRight } from "react-icons/bs";

const ArticleNews = () => {
  return (
    <div className={style.Article}>
      <div className={style.News}>
        <h2>Article & News</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </div>
      <div className={style.Box}>
        <div className={style.Box_div_um}>
          <img src={Cozinha1} />
          <h4>Let´s Get Solution For Building Construction Work</h4>
          <div className={style.Box_div_dois}>
            <p>26 December,2022 </p>
            <button><BsChevronRight /></button>
          </div>
        </div>
        <div className={style.Box_div_um}>
          <img src={Cozinha2} />
          <h4>Low Cost Latest Invented Interior Designing Ideas.</h4>
          <div className={style.Box_div_dois}>
            <p>22 November,2023</p>
            <button><BsChevronRight /></button>
          </div>
        </div>
        <div className={style.Box_div_um}>
          <img src={Cozinha3} />
          <h4>Best For Any Office & Business Interior Solution</h4>
          <div className={style.Box_div_dois}>
            <p>4 December,2023</p>
            <button><BsChevronRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleNews;
