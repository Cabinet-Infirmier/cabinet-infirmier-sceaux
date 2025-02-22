import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div>
          <h1>Cabinet d infirmières</h1>
          <h2>Sceaux</h2>

          <div>
            <p>
              Soins infirmiers à domicile et au cabinet. <br />
              Rendez-vous 7j/7, week-end et jours fériés compris
            </p>
          </div>

          <div>
            <p>
              18 square Robinson <br /> RDC gauche, interphone 15
              <br />
              92330 Sceaux
            </p>
          </div>
          <div>
            <p>01.46.60.09.74</p>
            <p>07.49.70.31.18</p>
          </div>
        </div>

        <div>
          <img className={styles.heroImg} src={heroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
