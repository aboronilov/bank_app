import {clients} from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map(item => (
          <div className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] transition duration-300 hover:opacity-60`}>
            <img key={item.id} alt="client" src={item.logo} className="sm:w-[192px] w-[100px] object-contain"/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients