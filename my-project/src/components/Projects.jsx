import Card from "../components/Card";
import homeStyle from "../styles/home";
import { projects } from "../utils/projects";

export const Projects = () => {
  return (
    <section className={homeStyle.projects}>
      <h2 className={homeStyle.h2}>Projekteja</h2>
      <p className={homeStyle.p}>Muutamia projekteja, joita olen tehnyt.</p>
      <div className={homeStyle.cardContainer}>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
