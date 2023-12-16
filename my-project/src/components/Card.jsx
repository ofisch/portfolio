import PropTypes from "prop-types";
import homeStyle from "../styles/home";

// ikonit
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Card = ({ project }) => {
  return (
    <div className={`${homeStyle.card} ${homeStyle.cardHover}`}>
      <div
        className={homeStyle.cardImg}
        style={{
          backgroundImage: `url(${project.imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <div className={homeStyle.cardContent}>
        <h2 className={homeStyle.cardTitle}>{project.title}</h2>
        <p className={homeStyle.cardDescription}>{project.description}</p>
        <ul className="flex flex-wrap justify-center gap-2">
          {project.lang.map((lang, index) => (
            <li key={index} className={homeStyle.cardLang}>
              {lang}
            </li>
          ))}
        </ul>
        <div className={homeStyle.cardLink}>
          {project.githubUrl !== "#" ? (
            <button
              className={homeStyle.buttonHover}
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <GitHubIcon />
            </button>
          ) : null}

          {project.url !== "#" ? (
            <button
              onClick={() => window.open(project.url, "_blank")}
              className={`${homeStyle.buttonHover} text-blue-500`}
            >
              <PlayArrowIcon />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Card;
