import Barbers from "../barbers/Barbers";
import barbersData from "../../data/barbersData.json";

const BarberSelection = () => {
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
