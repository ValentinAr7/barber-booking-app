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
      <Link to="/bookings">
        <Button variant="contained">Make an appoinment</Button>
      </Link>
    </>
  );
};

export default BarbersSection;
