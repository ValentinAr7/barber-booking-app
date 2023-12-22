import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import styles from "./booking.module.css";

const BookingScreen = () => {
  return (
    <>
      <h3>Book a date</h3>
      <div className={styles.calendarContainer}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker className={styles.calendar} orientation="StaticDatePicker" />
        </LocalizationProvider>{" "}
      </div>
    </>
  );
};

export default BookingScreen;
