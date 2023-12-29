import styles from "./barbers.module.css";
import barbersData from "../../data/barbersData.json";
import Barbers from "./Barbers";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BarbersSection = () => {
  const selectedBarber = useSelector((state) => state.barber.selectedBarber);

  console.log(selectedBarber);
  return (
    <>
      <h3>Available Barbers</h3>

      <div>
        {barbersData.map((barber) => (
          <div key={barber.id} className={styles.barberContainer}>
            <Barbers
              image={barber.image}
              name={barber.name}
              location={barber.location}
              priceRange={barber.priceRange}
              phone={barber.phone}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BarbersSection;
