import styles from "../style"
import {stats} from "../constants";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex sm:mb-20 mb-6 flex-row `}>
      {stats.map(item => (
        <div key={item.id} className="flex items-center flex-1 justify-center m-3">
          <h4 className="font-poppins font-semibold md:text-2xl sm:text-[15px] xs:text-[12px] text-white">
            {item.value}
          </h4>
          <p className="font-poppins font-normal md:text-2xl sm:text-[15px] xs:text-[12px] xs:leading-[15px] text-gradient uppercase ml-3">
            {item.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats