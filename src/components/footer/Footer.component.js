import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <span>
        Made by{" "}
        <a
          href="https://www.linkedin.com/in/karthik-is-dev"
          target="_blank"
          rel="noreferrer"
        >
          Karthik S
        </a>
      </span>
    </div>
  );
};

export default Footer;
