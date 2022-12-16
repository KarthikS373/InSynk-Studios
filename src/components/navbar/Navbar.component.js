import React from "react";

import logo from "../../assets/images/insynk_studios.png";
import Search from "../search/Search.component";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="InSynk Studio" />
      <Search />
    </div>
  );
};

export default Navbar;
