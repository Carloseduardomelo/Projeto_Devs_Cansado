import Header from "../../components/header/header";

import error from "../../assets/Error.svg";

import style from "./Error.module.css";

const Error = () => {
  return (
    <div>
      <Header />
      <div className={style.Box}>
        <img src={error}/>
        <div className={style.text_error}>
          <h2>404</h2>
          <p>We are sorry, but the page you requested was not found</p>
          <a href="/Home">
            <button>Back To Home</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
