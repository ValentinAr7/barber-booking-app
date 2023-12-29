// App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import ServicesSection from "./components/services/ServicesSection";
import BookingScreen from "./components/booking/BookingScreen";
import Banner from "./components/services/Banner";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ServicesSection />
                <Banner />
              </>
            }
          />
          <Route
            path="/bookings/*"
            element={
              <>
                <BookingScreen />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
