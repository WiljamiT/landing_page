import React from "react";
import styles from "../styles/Global";
import assets from "../assets/";

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Teknologiat
          </h1>
          <p className={`${styles.descriptionText} ${styles.whiteText}`}>
            Appi rakennettu mobiilisovellusten kehittämiseen käytettävällä
            frameworkilla, <b>React Nativella</b> sekä JavaScriptillä.{" "}
          </p>
        </div>
        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="Javascript" />
        </div>
        <p className={`${styles.descriptionText} ${styles.whiteText}`}>
          Device Mockup created from{" "}
          <a href="https://deviceframes.com/templates/iphone-13">
            <b>iPhone mockups</b>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Features;
