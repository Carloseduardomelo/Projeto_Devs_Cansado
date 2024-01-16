import ArticleNews from "../../components/Page_one/Article&News/Article&News";
import Bedroon from "../../components/Page_one/Bedroon/Bedroon";
import Dates from "../../components/Page_one/Dates/Dates";
import FollowOurProjects from "../../components/Page_one/FollowOurProjects/FollowOurProjects";
import InfesProjetes from "../../components/Page_one/InfesProjetes/InfesProjetes";
import Marcas from "../../components/Page_one/Marcas/Marcas";
import PeoplesAbout from "../../components/Page_one/PeoplesAbout/PeoplesAbout";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import style from "./home.module.css";
import Intro from "../../components/Intro/intro";

const Home = () => {
  return (
    <div className={style.caixa_home}>
      <Header />
      <Intro />
      <InfesProjetes />
      <PeoplesAbout />
      <Marcas />
      <FollowOurProjects />
      <Dates />
      <ArticleNews />
      <Bedroon />
      <Footer />
    </div>
  );
};

export default Home;
