import styles from "./barbers.module.css";
import barbersData from "../../data/barbersData.json";
import Barbers from "./Barbers";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const BarbersSection = () => {
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
      <Link to="/bookings">
        <Button variant="contained">Make an appointment</Button>
      </Link>
    </>
  );
};

export default BarbersSection;
