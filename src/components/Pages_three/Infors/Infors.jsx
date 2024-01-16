import style from "./Infors.module.css";
import { GoArrowRight } from "react-icons/go";

const Infors = () => {
  return (
    <section>
      <div className={style.Infors}>
        <div className={style.Div_Infor_Menores}>
          <div className={style.Infor}>
            <h2>Project Plan</h2>
            <p>
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <a href="#">
              Read More <GoArrowRight />
            </a>
          </div>

          <div className={style.Infor}>
            <h2>Interior Work</h2>
            <p>
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <a href="#">
              Read More <GoArrowRight />
            </a>
          </div>

          <div className={style.Infor}>
            <h2>Retail Design</h2>
            <p>
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <a href="#">
              Read More <GoArrowRight />
            </a>
          </div>

        </div>
        <div className={style.Div_Infor_Maiores}>
          <div className={style.Infor}>
            <h2>2d/3d Art Work</h2>
            <p>
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <a href="#">
              Read More <GoArrowRight />
            </a>
          </div>

          <div className={style.Infor}>
            <h2>Interior Work</h2>
            <p>
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <a href="#">
              Read More <GoArrowRight />
            </a>
          </div>

          <div className={style.Infor}>
            <h2>Decoration Work</h2>
            <p>
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <a href="#">
              Read More <GoArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infors;
