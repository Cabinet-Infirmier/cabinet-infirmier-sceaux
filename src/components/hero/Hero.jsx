import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero.png";
import Button from "../button/Button";
import { MessageSquare, Phone } from "lucide-react";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div>
          <h1>Cabinet d&apos;infirmières</h1>
          <h2>Sceaux</h2>

          <div>
            <p>
              Soins infirmiers à domicile et au cabinet. <br />
              Rendez-vous 7j/7, week-end et jours fériés compris
            </p>
          </div>

          <div className={styles.adress}>
            <p>
              18 square Robinson <br /> RDC gauche, interphone 15
              <br />
              92330 Sceaux
            </p>
          </div>
          <div className={styles.contact}>
            <div>
              <Phone /> 01.46.60.09.74
            </div>
            <div>
              <MessageSquare /> 07.49.70.31.18
            </div>
          </div>
          <Button>Prendre RDV</Button>
        </div>
      </div>

      <div className={styles.containerImage}>
        <img className={styles.img} src={heroImage} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
