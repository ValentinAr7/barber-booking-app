import styles from "./services.module.css";

const Services = ({ image, title }) => {
  return (
    <div className={styles.imageBox}>
      <img className={styles.image} src={image} alt={title} />
      <h4 className={styles.title}>{title}</h4>
    </div>
  );
};

export default Services;
