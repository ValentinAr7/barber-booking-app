import styles from "./services.module.css";

const Services = ({ image, title }) => {
  return (
    <div className={styles.imageBox}>
      <img className={styles.image} src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Services;
