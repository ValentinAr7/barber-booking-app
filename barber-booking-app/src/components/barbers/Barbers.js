import styles from "./barbers.module.css";

const Barbers = ({ image, name, location, priceRange, phone }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{priceRange}</p>
      <p>{phone}</p>
    </div>
  );
};

export default Barbers;
