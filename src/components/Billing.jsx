import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="md:w-full md:h-full w-3/4 h-3/4  relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The diverse materials we’ve compiled will help you tackle whatever
          tasks adulting throws your way, improving not only your financial
          health but also your mental and emotional well-being
        </p>
        <div className="flex flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple" className="cursor-pointer w-[128px] h-[42px] object-contain mr-5"/>
          <img src={google} alt="google" className="cursor-pointer w-[128px] h-[42px] object-contain"/>
        </div>
      </div>
    </section>
  );
};

export default Billing;
