import BarbersSection from "../barbers/BarbersSection";
import Calendar from "./Calendar";
import TimeSlots from "./TimeSlots";

const BookingScreen = () => {
  return (
    <>
      <BarbersSection />
      <Calendar />
      <TimeSlots />
    </>
  );
};

export default BookingScreen;
