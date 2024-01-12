import style from "./Footer.module.css";
import casa from "../../assets/logo.svg";
import face from "../../assets/f.svg";
import t from "../../assets/T.png"

const Footer = () => {
  return (
    <div className={style}>
      <section>
        <section>
          <img src={casa} alt="logo da casa." />
          <p>Selhono</p>
        </section>
        <p className={style.my_footer}>
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <section>
          <img src={face} alt="" />
          <img src={t} alt="" />
        </section>
      </section>

      <section>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </section>
      <section>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </section>
      <section>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </section>
    </div>
  );
};

export default Footer;
