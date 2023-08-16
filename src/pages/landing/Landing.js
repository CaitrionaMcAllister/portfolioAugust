// import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
// import landingImage from "../../images/me.svg";
// import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";
import Background from "../../components/Background";
import Cursor from "../../components/Cursor";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <section className="landing" style={styles.landing}>
      <Cursor />
      {/* <Draw /> */}
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .changeDelay(80)
                .typeString("I'm a Creative Technologist & Digtial Designer")
                .pauseFor(1500)
                .deleteChars(16)
                .typeString("Innovater")
                .pauseFor(1000)
                .deleteChars(9)
                .typeString("Baker")
                .pauseFor(1000)
                .deleteChars(5)
                .typeString("Candle Maker")
                .pauseFor(1000)
                .deleteChars(12)
                .typeString("Potato Bread Enthusiast")
                .pauseFor(1000)
                .deleteChars(23)
                .typeString("Photographer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Code. ")
                .pauseFor(500)
                .typeString("Create. ")
                .pauseFor(500)
                .typeString("Innovate.")

                .start();
            }}
          />
        </div>
      </div>

      {/* <div className="image-container">
        <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt="Caitriona McAllister"
        />
      </div> */}
      <SocialIcons />
      <Background />
    </section>
  );
};

export default Landing;
