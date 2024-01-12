import Header from "../header/header";
import style from "./main.module.css";

const Main = () => {
    return (
        <div>
            <Header />
            <h1 className={style.mainTitle}>Main</h1>
        </div>
    );
};

export default Main;
