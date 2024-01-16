import foto01 from "../../../assets/Rectangle18.svg";
import foto02 from "../../../assets/Rectangle19.svg";

import style from "./What.module.css"

const What = () => {
  return (
    <div className={style.divAll}>
      <section className={style.WhatTitleBox}>
        <p className={style.WhatTitlePrincinpal}>
          I like an interior that defies labeling. I don't really want someone
          to walk into a room and know that I did it
        </p>
        <p className={style.WhatSubTitle}>BUNNY WILLIAMS</p>
      </section>
      <section className={style.WhatDivisor}>
        <section className={style.Whatireito}>
          <section className={style.WhatBoxSegundaParte}>
            <p className={style.WhatTilteSEgundaParte}>What We Do</p>
            <p className={style.WhatContext}>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <button type="button" className={style.WhatButton}>
              {" "}
              Our Concept{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M1 8.4353L14.7232 8.29845M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </section>
          <section>
            <img src={foto01} alt="" />
          </section>
        </section>
        <section className={style.WhatEsquerda}>
          <section className={style.WhatBoxSegundaParte02}>
            <p className={style.WhatTilteSEgundaParte}>The End Result</p>
            <p className={style.WhatContext}>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <button type="button" className={style.WhatButton}>
              {" "}
              Our Concept{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M1 8.4353L14.7232 8.29845M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </section>
          <section>
            <img src={foto02} alt="" />
          </section>
        </section>
      </section>
    </div>
  );
};

export default What;
