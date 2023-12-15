import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Projects } from "../components/Projects";
import homeStyle from "../styles/home";

export const Home = () => {
  return (
    <div className={homeStyle.pageContainer}>
      <Header></Header>
      <Main></Main>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};
