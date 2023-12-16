const homeStyle = {
  pageContainer:
    "font-Baloo2 text-xl text-text bg-primary m-auto mt-12 w-3/4 flex flex-col items-start",
  h1: "text-4xl text-gray-800 font-bold",
  h2: "text-2xl text-gray-800 font-bold",
  h3: "text-xl text-gray-800 font-bold",
  p: " text-gray-800",

  introduction: "flex flex-col max-w-lg pt-8",
  mainContent: "flex items-center md:flex-col md:items-start md:px-8",

  cardContainer: "grid grid-cols-3 md:flex md:flex-col gap-4 mt-8",
  card: "grid grid-rows-2 max-w-xs bg-white card rounded-lg shadow-lg",
  cardContent: "grid grid-rows-2 py-4 px-6",
  cardTitle: "card-title text-center my-4 tracking-wide font-bold",
  cardDescription: "card-description text-center",
  cardLang: "font-bold text-sm",
  cardLink: "flex justify-center",
  cardImg: "rounded-t-lg shadow-lg",
  cardHover:
    "transition-transform transform hover:scale-105 delay-70 duration-300",

  content: "mt-12 ml-20 flex flex-col items-start",
  header: "flex flex-col items-center justify-center",
  main: "flex flex-col",
  socials: "flex justify-start gap-2 md:justify-center md:mt-4",
  projects: "mt-8 md:self-center",
  hobbies: "mt-8 md:flex md:flex-col md:self-center md:items-center md:px-8",
  footer:
    "mt-8 flex flex-col items-start md:items-center md:self-center justify-center text-gray-800",
  profileImg: "w-48 h-48 object-cover rounded-lg mr-4 shadow-lg",
  ul: "list-disc ml-6 text-gray-800",
  a: "underline",
  bigEmail:
    "text-3xl font-bold text-gray-800 md:flex md:flex-col md:items-center",

  buttonHover:
    "transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-125 hover:cursor-pointer hover:text-action duration-300",
};
export default homeStyle;
