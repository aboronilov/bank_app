import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Whether you have just started to learn, or you are already an expert
          in the world of finance, business and investments, these resources
          will help you stay on top of the game
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-full h-full md:w-3/4 md:h-3/4"/>
      </div>
    </section>
  );
};

export default CardDeal;
