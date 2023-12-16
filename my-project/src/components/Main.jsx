import homeStyle from "../styles/home";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Main = () => {
  return (
    <main className={homeStyle.main}>
      <div className={homeStyle.mainContent}>
        <div>
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                <img
                  className={homeStyle.profileImg}
                  src="\src\assets\img\onni.jpg"
                  alt="onni"
                />
              </div>
              <div className="back">
                <img
                  className={homeStyle.profileImg}
                  src="\src\assets\img\oni.jpg"
                  alt="onni"
                />
              </div>
            </div>
          </div>

          <div className={homeStyle.socials}>
            <button
              className={`${homeStyle.buttonHover}`}
              onClick={() => window.open("https://github.com/ofisch", "_blank")}
            >
              <GitHubIcon className={homeStyle.buttonHover} />
            </button>
            <button
              className={`${homeStyle.buttonHover}`}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/onni-fischer-ab3923266/",
                  "_blank"
                )
              }
            >
              <LinkedInIcon className={`scale-110`} />
            </button>
          </div>
        </div>
        <div className={homeStyle.introduction}>
          <h1 className={homeStyle.h1}>Hei! </h1>
          <h2 className={homeStyle.h2}>Olen Onni Fischer,</h2>
          <p className={homeStyle.p}>
            insinööriopiskelija Metropoliassa, pääaineena web-tekniikat ja
            digitaalinen media. Olen kiinnostunut erityisesti
            frontend-kehityksestä ja selkeiden, käyttäjäystävällisten
            käyttöliittymien suunnittelusta. <br /> Viimeisin innostava ja
            mielenkiintoinen projekti on ollut tekoälyä hyödyntävän{" "}
            <a
              href="https://webweave.fi"
              target="_blank"
              rel="noreferrer"
              className="text-action underline"
            >
              kotisivukoneen
            </a>{" "}
            kehittäminen yhdessä opiskelukavereiden kanssa! 🤖
          </p>
        </div>
      </div>
    </main>
  );
};
