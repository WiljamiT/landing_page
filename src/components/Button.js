import React from "react";
import styles from "../styles/Global";
const Button = ({ assetUrl, link }) => {
  return (
    <div
      className={styles.btnBlack}
      onClick={() =>
        window.open(
          "https://expo.dev/@wtakkinen/react_native_app?serviceType=classic&distribution=expo-go",
          "_blank"
        )
      }
    >
      <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
        <p className={`${styles.btnText} text-sm`}>Tästä appiin</p>
      </div>
    </div>
  );
};

export default Button;
