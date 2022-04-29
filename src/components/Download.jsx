import React from "react";

import styles from "../styles/Global";

const Download = () => {
  return (
    <div
      className={`${styles.section} 
    ${styles.bgWhite}`}
    >
      <div
        className={`${styles.subSection} 
      flex-col text-center`}
      >
        <div>
          <h1
            className={`${styles.h1Text} 
        ${styles.blackText}`}
          >
            Lähdekoodi
          </h1>
          <p
            className={`${styles.descriptionText}  
        ${styles.blackText}`}
          >
            Lataa koko lähdekoodi GitHubista.
          </p>
        </div>
        <button className={styles.btnPrimary}>Lähdekoodi</button>
      </div>
    </div>
  );
};

export default Download;
