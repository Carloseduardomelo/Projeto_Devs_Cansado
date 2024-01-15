import ArticleNews from "../components/Article&News/Article&News";
import Dates from "../components/Dates/Dates";
import FollowOurProjects from "../components/FollowOurProjects/FollowOurProjects";
import InfesProjetes from "../components/InfesProjetes/InfesProjetes";
import Marcas from "../components/Marcas/Marcas";
import PeoplesAbout from "../components/PeoplesAbout/PeoplesAbout";

import style from "./home.module.css";

const Home = () => {
  return (
    <div className={style.caixa_home}>
      <InfesProjetes />
      <PeoplesAbout />
      <Marcas />
      <FollowOurProjects />
      <Dates />
      <ArticleNews />
    </div>
  );
};

export default Home;
