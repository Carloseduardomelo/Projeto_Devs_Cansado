import style from "./Productive.module.css";

const Productive = () => {
  return (
    <div className={style.divAll}>
      <p className={style.ProdutcveTitle}>
        Creative project? Let's have a productive talk.
      </p>
      <section className={style.subDivAll}>
        <section className={style.Inputs}>
          <section className={style.INputNameEmail}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className={style.name}
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className={style.email}
            />
          </section>
          <input
            type="text"
            name=""
            id=""
            placeholder="Message"
            className={style.message}
          />
        </section>
        <section className={style.sectionButton}>

        <button type="button" className={style.Button}>
          Send Now{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
          >
            <path
              d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
              stroke="#CDA274"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        </section>
      </section>
    </div>
  );
};

export default Productive;
