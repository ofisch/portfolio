import homeStyle from "../styles/home";
import { hobbies } from "../utils/hobbies";

const Hobbies = () => {
  return (
    <section className={homeStyle.hobbies}>
      <h2 className={homeStyle.h2}>Harrastuksia</h2>
      <ul className={homeStyle.ul}>
        {hobbies.map((hobby, index) => (
          <li key={index} className={homeStyle.li}>
            <div>
              <h3 className={`${homeStyle.h3} bg-white rounded-lg w-fit p-1`}>
                {hobby.title}
              </h3>
              <p className={`${homeStyle.p} max-w-lg`}>{hobby.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hobbies;
