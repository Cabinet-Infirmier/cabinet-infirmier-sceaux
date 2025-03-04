import styles from "./Hero.module.css";
import { NavLink } from "react-router-dom";
import heroImage from "../../../public/images/nurses/Hero.png";
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

          <div className={styles.address}>
            <p>
              <b>
                18 square Robinson <br /> RDC gauche, interphone 15
                <br />
                92330 Sceaux
              </b>
            </p>
          </div>
          <div className={styles.contact}>
            <div>
              <Phone /> <a href="tel:0146600974">01.46.60.09.74</a>
            </div>
            <div>
              <MessageSquare /> <a href="sms:0749703118">07.49.70.31.18</a>
            </div>
          </div>

          <NavLink to="/contact">
            <Button>Prendre RDV</Button>
          </NavLink>
        </div>
      </div>

      <div className={styles.containerImage}>
        <div className={styles.grayForm}></div>
        <div className={styles.pinkForm}></div>
        <img className={styles.img} src={heroImage} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
