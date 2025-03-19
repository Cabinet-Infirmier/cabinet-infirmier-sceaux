import styles from "./Hero.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import heroImage from "../../../public/images/nurses/Hero.png";
import Button from "../button/Button";
import { MessageSquare, Phone } from "lucide-react";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div>
          <h2>Cabinet d&apos;infirmières</h2>
          <h3>Sceaux</h3>

          <div>
            <p>
              Soins infirmiers à domicile et au cabinet. <br />
              Rendez-vous 7j/7, week-end et jours fériés compris
            </p>
          </div>

          <div className={styles.address}>
            <p>
              <b>
                18 square Robinson
                <br />
                92330 Sceaux
                <br />
                interphone 15,
                <br />
                RDC gauche
              </b>
            </p>
          </div>
          <h4 className={styles.pinkTitle}>
            Prise de RDV par sms ou téléphone
          </h4>
          <div className={styles.contact}>
            <div>
              <Phone /> <a href="tel:0146600974">01.46.60.09.74</a>
            </div>
            <div>
              <MessageSquare /> <a href="sms:0749703118">07.49.70.31.18</a>
            </div>
          </div>

          <NavLink to="/contact">
            <Button onClick={() => navigate("/contact")}>Nous Contacter</Button>
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
