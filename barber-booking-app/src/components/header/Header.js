import React from "react";
import styles from "./header.module.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Faded Barbers</h2>
      <IconButton className={styles.icon}>
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default Header;
