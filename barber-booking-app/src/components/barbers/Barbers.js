import styles from "./barbers.module.css";
import Button from "@mui/material/Button";

const Barbers = ({ image, name, location, priceRange, phone }) => {
  return (
    <div className={styles.dataBox}>
      <img className={styles.image} src={image} alt={name} />

      <div className={styles.textData}>
        <h3>{name}</h3>
        <p>{location}</p>
        <p>{priceRange}</p>
        <p>{phone}</p>
      </div>
      <Button>Book</Button>
    </div>
  );
};

export default Barbers;
