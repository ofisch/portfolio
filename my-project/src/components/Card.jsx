import PropTypes from "prop-types";
import homeStyle from "../styles/home";

// ikonit
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Card = ({ project }) => {
  return (
    <div className={homeStyle.card}>
      <img
        className={homeStyle.cardImg}
        src={project.imageUrl}
        alt={project.title}
      />
      <div className={homeStyle.cardContent}>
        <h2 className={homeStyle.cardTitle}>{project.title}</h2>
        <p className={homeStyle.cardDescription}>{project.description}</p>
        <div className={homeStyle.cardLink}>
          <button>
            <GitHubIcon />
          </button>
          <button className="text-blue-500">
            <PlayArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Card;
