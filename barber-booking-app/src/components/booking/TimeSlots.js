// TimeSlots.js
import styles from "./booking.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSlot,
  selectSelectedSlots,
} from "../../store/barbers/slotsSlice";
import { useState } from "react";

const TimeSlots = () => {
  const dispatch = useDispatch();
  const selectedSlots = useSelector(selectSelectedSlots) || [];
  const [selectedSlot, setSelectedSlot] = useState(0);

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
    if (!selectedSlots.includes(index)) {
      if (selectedSlot !== null) {
        dispatch(selectSlot(index));
      }
      setSelectedSlot(index);
      console.log(`Selected time slot: ${timeSlots[index]}`);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h3>Available Hours</h3>
      <div className={styles.slotsContainer}>
        {timeSlots.map((slot, index) => (
          <div
            key={index}
            className={`${styles.slots} ${
              selectedSlots.includes(index) ? styles.selectedSlot : styles.slots
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
