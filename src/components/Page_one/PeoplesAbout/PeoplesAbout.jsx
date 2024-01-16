import style from "./PeoplesAbout.module.css";

import Pessoa1 from "../../../assets/Pessoa1.svg";
import Pessoa2 from "../../../assets/Pessoa2.svg";
import Pessoa3 from "../../../assets/Pessoa3.svg";

const PeoplesAbout = () => {
  return (
    <div className={style.Box}>
      <div className={style.Infors}>
        <h2 className={style.Title}>What the People Thinks</h2>
        <h2 className={style.Title}>About Us</h2>
      </div>
      <section className={style.BoxPrincipal}>
        <section className={style.boxInfsPeople}>
          <div className={style.TextBoxInfsPeople}>
            <section className={style.namePeople}>
              <img src={Pessoa1} alt="" />
              <span>
                <p className={style.namePeople02}>Natasha</p>
                <p className={style.locationPeople}>Moscow, Russi</p>
              </span>
            </section>
            <section>
              <p className={style.aboutPeople}>
                Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been.
              </p>
            </section>
          </div>
        </section>
        <section className={style.boxInfsPeople}>
          <div className={style.TextBoxInfsPeople}>
            <section className={style.namePeople}>
              <img src={Pessoa2} alt="" />
              <span>
                <p className={style.namePeople02}>Raymond Galario</p>
                <p className={style.locationPeople}>UK, London</p>
              </span>
            </section>
            <section>
              <p className={style.aboutPeople}>
                Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been.
              </p>
            </section>
          </div>
        </section>
        <section className={style.boxInfsPeople}>
          <div className={style.TextBoxInfsPeople}>
            <section className={style.namePeople}>
              <img src={Pessoa3} alt="" />
              <span>
                <p className={style.namePeople02}>Benny Roll</p>
                <p className={style.locationPeople}>USA, New York</p>
              </span>
            </section>
            <section>
              <p className={style.aboutPeople}>
                Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been.
              </p>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default PeoplesAbout;
