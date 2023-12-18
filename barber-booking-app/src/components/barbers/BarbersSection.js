import styles from "./barbers.module.css";
import barbersData from "../../data/barbersData.json";
import Barbers from "./Barbers";

const BarbersSection = () => {
  return (
    <div className={styles.barberBox}>
      {barbersData.map((barber) => (
        <Barbers
          key={barber.id}
          image={barber.image}
          name={barber.name}
          location={barber.location}
          priceRange={barber.priceRange}
          phone={barber.phone}
        />
      ))}
    </div>
  );
};

export default BarbersSection;
