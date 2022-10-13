import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer transition duration-300 ease-in hover:translate-y-2 hover:opacity-70`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <div className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Get</span>
        </div>
        <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain ml-2"
          />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
