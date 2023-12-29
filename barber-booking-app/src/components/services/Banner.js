import styles from "./services.module.css";
import bannerImage from "../../assets/Fonts/Marck_Script/bannerImage.png";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.leftSection}>
        <h2>Fresh Out</h2>
        <p>
          Welcome to Faded Barbers! Discover a world of style and grooming. Book
          your next haircut effortlessly level up and boost your confidence."
        </p>
      </div>

      <div className={styles.rightSection}>
        <img className={styles.img} src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
