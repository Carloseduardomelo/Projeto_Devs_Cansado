import style from "./InfesProjetes.module.css";
import Vector from "../../assets/Vector.svg";

const InfesProjetes = () => {
  return (
    <div className={style.full}>
      <div className={style.InfesAll}>
        <section className={style.sections}>
          <p className={style.sectionsTitle}>Project Plan</p>
          <p className={style.sectionsP}>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <p className={style.sectionsRedire}>
            Read More
            <span>
              <img src={Vector} alt="" />
            </span>
          </p>
        </section>
        <section className={style.sections}>
          <p className={style.sectionsTitle}>Interior Work</p>
          <p className={style.sectionsP}>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <p className={style.sectionsRedire}>
            Read More
            <span>
              <img src={Vector} alt="" />
            </span>
          </p>
        </section>
        <section className={style.sections}>
          <p className={style.sectionsTitle}>Realization</p>
          <p className={style.sectionsP}>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <p className={style.sectionsRedire}>
            Read More
            <span>
              <img src={Vector} alt="" />
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default InfesProjetes;
