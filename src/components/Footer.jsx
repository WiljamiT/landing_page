import React from "react";

import styles from "../styles/Global";

const Footer = () => {
  return (
    <div
      className={`${styles.section} 
    ${styles.bgWhite} banner05`}
    >
      <div
        className={`${styles.subSection} 
      flex-col text-center`}
      >
        <div>
          <p
            className={`${styles.descriptionText}  
        ${styles.whiteText}`}
          >
            © | Wiljami Takkinen{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
