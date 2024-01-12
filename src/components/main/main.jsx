import Header from "../header/header";
import styled from "./main.module.css";

const Main = () => {
    return (
        <div>
            <Header />
            <h1 className={styled.mainTitle}>Main</h1>
        </div>
    );
};

export default Main;
