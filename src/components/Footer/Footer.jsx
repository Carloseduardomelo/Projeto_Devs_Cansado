import style from "./Footer.module.css";
import casa from "../../assets/logo.svg";
import face from "../../assets/f.svg";
import t from "../../assets/T.png";
import linktin from "../../assets/link.svg";
import instagram from "../../assets/insta.svg";

const Footer = () => {
  return (
    <div className={style.divAll}>
      <section className={style.sectionLink}>
        <section className={style.selhono}>
          <p>ewrwer</p>
          <img src={casa} alt="logo da casa." />
          <p className={style.selhonoTitle}>Selhono</p>
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
        <p className={style.pagesTitle}>Pages</p>
        <div className={style.pagesDiv}>
          <p>About Us</p>
          <p>Our Projects</p>
          <p>Our Team</p>
          <p>Contac Us</p>
          <p>Services</p>
        </div>
      </section>

      <section className={style.Services}>
        <p className={style.ServicesTitle}>Services</p>
        <div className={style.ServicesDiv}>
          <p>Kitchan</p>
          <p>Living Area</p>
          <p>Bathrcom</p>
          <p>Dinning Hall</p>
          <p>Bedroom</p>
        </div>
      </section>

      <section className={style.Contact}>
        <p className={style.ContactTitle}>Contact</p>
        <div className={style.ContactDiv}>
          <p className={style.East}>55 East Birchwood Ave. Brooklyn, New York 11201</p>
          <p>contact@selhono.com</p>
          <p>(123) 456 - 7890</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
