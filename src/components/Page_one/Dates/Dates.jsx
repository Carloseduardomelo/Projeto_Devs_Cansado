import style from "./Dates.module.css";

const Dates = () => {
  return (
    <div className={style.Box}>
      <div className={style.Datas}>
        <div>
          <h2>12</h2>
          <p>Year of Experience</p>
        </div>
        <p className={style.Barra}></p>
        <div>
          <h2>1074</h2>
          <p>Success Project</p>
        </div>
        <p className={style.Barra}></p>
        <div>
          <h2>98</h2>
          <p>Active Project</p>
        </div>
        <p className={style.Barra}></p>
        <div>
          <h2>583</h2>
          <p>Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Dates;
