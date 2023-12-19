// ServicesSection.js
import React from "react";
import Services from "./Services";
import servicesData from "../../data/serviceSection.json";
import styles from "./services.module.css";

const ServicesSection = () => {
  return (
    <>
      <h3>Available Services</h3>
      <div className={styles.serviceBox}>
        {servicesData.map((service, index) => (
          <Services key={index} title={service.title} image={service.image} />
        ))}
      </div>
    </>
  );
};

export default ServicesSection;
