import { Footer } from "../components/Footer";
import Hobbies from "../components/Hobbies";
import { Main } from "../components/Main";
import { Projects } from "../components/Projects";
import homeStyle from "../styles/home";

export const Home = () => {
  return (
    <div className={homeStyle.pageContainer}>
      <Main></Main>
      <Projects></Projects>
      <Hobbies></Hobbies>
      <Footer></Footer>
    </div>
  );
};
