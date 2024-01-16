import Rectangle1 from "../../../assets/Rectangle 4.svg";
import Rectangle2 from "../../../assets/Rectangle 5.svg";
import Rectangle3 from "../../../assets/Rectangle 6.svg";
import Rectangle4 from "../../../assets/Rectangle 7.svg";
import Seta from "../../../assets/_.svg";
import style from "./FollowOurProjects.module.css";

const FollowOurProjects = () => {
  return (
    <div className={style.DivPrincipal}>
      <section className={style.Title}>
        <h2 className={style.TitleH2}>Follow Our Projects</h2>
        <p className={style.TitleP}>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </section>
      <section className={style.gap}>
        <section className={style.img}>
          <section className={style.divisor}>
            <section>
              <img src={Rectangle1} alt="" />
            </section>
            <section className={style.infsHosp}>
              <section>
                <p className={style.titleImg} >Modern bedroom</p>
                <p className={style.Categoria}>Decor / Artchitecture</p>
              </section>
              <section>
                <img src={Seta} alt="" />
              </section>
            </section>
          </section>
          <section className={style.divisor}>
            <section>
              <img src={Rectangle2} alt="" />
            </section>
            <section className={style.infsHosp}>
              <section>
                <p className={style.titleImg} >Modern bedroom</p>
                <p className={style.Categoria}>Decor / Artchitecture</p>
              </section>
              <section>
                <img src={Seta} alt="" />
              </section>
            </section>
          </section>
        </section>
        <section className={style.img}>
          <section className={style.divisor}>
            <section>
              <img src={Rectangle3} alt="" />
            </section>
            <section className={style.infsHosp}>
              <section>
                <p className={style.titleImg} >Modern bedroom</p>
                <p className={style.Categoria}>Decor / Artchitecture</p>
              </section>
              <section>
                <img src={Seta} alt="" />
              </section>
            </section>
          </section>
          <section className={style.divisor}>
            <section>
              <img src={Rectangle4} alt="" />
            </section>
            <section className={style.infsHosp}>
              <section>
                <p className={style.titleImg} >Modern bedroom</p>
                <p className={style.Categoria}>Decor / Artchitecture</p>
              </section>
              <section>
                <img src={Seta} alt="" />
              </section>
            </section>
          </section>
        </section> 
      </section>
    </div>
  );
};

export default FollowOurProjects;
