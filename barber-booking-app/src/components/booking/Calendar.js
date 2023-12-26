import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import styles from "./booking.module.css";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { selectDate } from "../../store/barbers/calendarSlice";
import { useSelector } from "react-redux";

const Calendar = () => {
  const dispatch = useDispatch();
  const minDate = dayjs();

  const handleDateSelection = (newDate) => {
    const serializedDate = newDate.toISOString(); // Convert to a string
    dispatch(selectDate(serializedDate));
  };

  return (
    <>
      <h3>Book a date</h3>
      <div className={styles.calendarContainer}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            className={styles.calendar}
            minDate={minDate}
            value={minDate}
            onChange={handleDateSelection}
          />
        </LocalizationProvider>{" "}
      </div>
    </>
  );
};

export default Calendar;
