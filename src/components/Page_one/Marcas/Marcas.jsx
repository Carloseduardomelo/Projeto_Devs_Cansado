import Frame from "../../../assets/Frame.png";
import Frame02 from "../../../assets/FrameBe.png";
import Frame03 from "../../../assets/FrameCompli.png";
import Frame04 from "../../../assets/FramePates.png";

import style from "./Marcas.module.css";

const Marcas = () => {
  return (
    <div className={style.Box}>
      <div>
        <img src={Frame} alt="logo buffer" />
        <img src={Frame02} alt="log big Commerce" />
        <img src={Frame03} alt="logo Uon" />
        <img src={Frame04} alt="logo final" />
      </div>
    </div>
  );
};

export default Marcas;
