import styles from "./booking.module.css";

const TimeSlots = () => {
  let startDate = new Date();
  startDate.setHours(9, 0, 0);

  let endDate = new Date();
  endDate.setHours(17, 30, 0);

  const timeSlots = [];
  let currentTime = startDate;

  while (currentTime <= endDate) {
    timeSlots.push(
      currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
    currentTime.setMinutes(currentTime.getMinutes() + 45);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.slotsContainer}>
        {timeSlots.map((slot, index) => (
          <div key={index} className={styles.slots}>
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;
