import homeStyle from "../styles/home";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Main = () => {
  return (
    <main className={homeStyle.main}>
      <div className={homeStyle.mainContent}>
        <div>
          <img
            className={homeStyle.profileImg}
            src="\src\assets\img\onni.jpg"
            alt="onni"
          />
          <div className="flex justify-start gap-2">
            <GitHubIcon />
            <LinkedInIcon className="scale-110" />
          </div>
        </div>
        <div className={homeStyle.introduction}>
          <h1 className={homeStyle.h1}>Hei! </h1>
          <h2 className={homeStyle.h2}>Olen Onni Fischer</h2>
          <p className={homeStyle.p}>
            innokas frontend-kehittäjä, jolla on vahvaa osaamista Reactista ja
            Typescriptistä. Olen intohimoinen koodaaja, joka nauttii haastavista
            projekteista ja uusien teknologioiden oppimisesta.
          </p>
        </div>
      </div>
    </main>
  );
};
