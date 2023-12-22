import styles from "./booking.module.css";
import { useState } from "react";

const TimeSlots = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

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

  const handleSelectedSlot = (index) => {
    setSelectedSlot(index);
  };

  return (
    <div className={styles.mainContainer}>
      <h3>Available Hours</h3>
      <div className={styles.slotsContainer}>
        {timeSlots.map((slot, index) => (
          <div
            key={index}
            className={`${styles.slots} ${
              selectedSlot === index ? styles.selectedSlot : ""
            }`}
            onClick={() => handleSelectedSlot(index)}
          >
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;
