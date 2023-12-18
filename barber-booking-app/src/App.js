import "./App.css";
import BarbersSection from "./components/barbers/BarbersSection";
import Header from "./components/header/Header";
import ServicesSection from "./components/services/ServicesSection";

function App() {
  return (
    <div className="App">
      <Header />
      <ServicesSection />
      <BarbersSection />
    </div>
  );
}

export default App;
