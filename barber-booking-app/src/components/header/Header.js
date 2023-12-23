import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <IconButton className={styles.arrow} onClick={handleGoBack}>
        <ArrowBackIcon />
      </IconButton>
      <h2 className={styles.header}>Faded Barbers</h2>
      <IconButton className={styles.icon}>
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default Header;
