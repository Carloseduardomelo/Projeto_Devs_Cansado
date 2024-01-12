import style from "./Footer.module.css";
import casa from "../../assets/logo.svg";
import face from "../../assets/f.svg";
import t from "../../assets/T.png"
import linktin from "../../assets/link.svg"
import instagram from "../../assets/insta.svg"

const Footer = () => {
  return (
    <div className={style.divAll}>
      <section className={style.sectionLink}>
        <section className={style.selhono}>
          <img src={casa} alt="logo da casa." />
          <p>Selhono</p>
        </section>
        <p className={style.established}>
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <section className={style.icons}>
          <img src={face} alt="" />
          <img src={t} alt="" />
          <img src={linktin} alt="" />
          <img src={instagram} alt="" />
        </section>
      </section>

      <section className={style.pages}>
        <p>Pages</p>
        <p>About Us</p>
        <p>Our Projects</p>
        <p>Our Team</p>
        <p>Contac Us</p>
        <p>Services</p>
      </section>
      <section className={style.Services}>
        <p>Services</p>
        <p>Kitchan</p>
        <p>Living Area</p>
        <p>Bathrcom</p>
        <p>Dinning Hall</p>
        <p>Bedroom</p>
      </section>
      <section>
        <p>Contact</p>
        <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
        <p>contact@selhono.com</p>
        <p>(123) 456 - 7890</p>
      </section>
    </div>
  );
};

export default Footer;
