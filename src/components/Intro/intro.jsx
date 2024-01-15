import style from "./intro.module.css";
import { HiArrowSmallRight } from "react-icons/hi2";
import FundoSala from '../../assets/rectangle.png'

const Intro = () => {
  return (
    <div className={style.Page}>
      <img src={FundoSala} alt="" />
      <section className={style.Page_title}>
        <h1>Lets make your <br /> home beautiful together</h1>
        <p>
          There are many variations of the passages <br /> of lorem Ipsum
          fromavailable, majority.
        </p>
        <button className={style.Button}>
          <a href="#">Get Started</a> 
          <span className={style.Button_Seta}><HiArrowSmallRight /></span>
        </button>
      </section>
    </div>
  )
}

export default Intro 