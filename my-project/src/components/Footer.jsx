import homeStyle from "../styles/home";

import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <footer className={homeStyle.footer}>
      <h2 className={homeStyle.bigEmail}>
        {" "}
        <EmailIcon className="scale-125"></EmailIcon> onni.fischer@gmail.com
      </h2>
      <p>© 2023 Onni Fischer</p>
    </footer>
  );
};
