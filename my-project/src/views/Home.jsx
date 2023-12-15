import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Projects } from "../components/Projects";
import homeStyle from "../styles/home";

export const Home = () => {
  return (
    <div className={homeStyle.pageContainer}>
      <Main></Main>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};
