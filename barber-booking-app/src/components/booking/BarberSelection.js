import Barbers from "../barbers/Barbers";
import barbersData from "../../data/barbersData.json";
import { useSelector } from "react-redux";

const BarberSelection = () => {
  const selectedBarber = useSelector((state) => state.barber.selectedBarber);

  console.log(selectedBarber);
  return (
    <div>
      {barbersData.map((barber) => (
        <Barbers
          key={barber.id}
          image={barber.image}
          name={barber.name}
          priceRange={barber.priceRange}
        />
      ))}
    </div>
  );
};

export default BarberSelection;
