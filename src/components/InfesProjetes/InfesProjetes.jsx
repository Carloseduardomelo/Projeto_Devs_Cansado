import style from "./InfesProjetes.module.css";
import Vector from "../../assets/Vector.svg"

const InfesProjetes = () => {
  return (
    <div className={style}>
      <section className={style}>
        <p>Project Plan</p>
        <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
        <p>
        Read More
          <span><img src={Vector} alt="" /></span>
        </p>
      </section>
      <section className={style}>
      <p>Interior Work</p>
        <p>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>
        <p>
        Read More
          <span><img src={Vector} alt="" /></span>
        </p>
      </section>
      <section className={style}>
      <p>Realization</p>
        <p>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>
        <p>
        Read More
          <span><img src={Vector} alt="" /></span>
        </p>
      </section>
    </div>
  );
};

export default InfesProjetes;
