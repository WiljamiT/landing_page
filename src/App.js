import { Download, Features, SectionWrapper, Footer } from "./components";
import assets from "./assets";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="React Native UI esittely"
        description='Lataa "Expo Go" Play kaupasta tai App Storesta ja tutustu appiin avaamalla linkki alta.'
        showBtn
        mockupImg={assets.puhelin14k}
        banner="banner"
      />
      <SectionWrapper
        title="React Native UI"
        description='Appi on lähinnä UI myytäville levyille, ilman sen kummempia toiminnallisuuksia. 
        Etusivulla on listattuna kaikki myytävät kohteet, sekä hakuvalikko. "Aseta tarjous" nappia painamalla aukeaa toinen sivu josta löytyy tarkemmat tiedot.'
        mockupImg={assets.puhelin24k}
        reverse
      />

      <Features />

      <Download />
      <SectionWrapper
        title="Expo Store"
        description="Expo on avoimen lähdekoodin alusta universaalien natiivisovellusten tekemiseen Androidille, iOS:lle ja webille JavaScriptin ja Reactin avulla."
        showBtn
        mockupImg={assets.puhelin2}
        banner="banner02"
      />
      <Footer />
    </>
  );
};

export default App;
