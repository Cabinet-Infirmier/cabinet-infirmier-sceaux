import styles from "./Hero.module.css";
import iconPhone from "../../assets/icons/icon-phone.png";
import iconSms from "../../assets/icons/icon-sms.png";
import imgHero from "../../assets/images/HeroImg.png";

export default function Hero() {
  return (
    <div className={styles.containerHero}>
      <div className={styles.container}>
        <h1>
          Cabinet d’infirmières<br></br> <span>Sceaux</span>
        </h1>
        <p>
          Soins infirmiers à domicile et au cabinet Rendez-vous 7 jours/7,
          week-end et jours fériés compris
        </p>
        <p>
          <b>18 square Robinson RDC gauche, interphone 15 92330 Sceaux</b>
        </p>
        <div className={styles.containerIcons}>
          <div>
            <img src={iconPhone} className={styles.icon} alt="Telephone icon" />
            <a href="tel:0146600974">01.46.60.09.74</a>
          </div>
          <div>
            <img src={iconSms} className={styles.icon} alt="Sms icon" />
            <a href="sms:0749703118">07.49.70.31.18</a>
          </div>
        </div>
        <button>Prendre RDV</button>
      </div>
      <div className={styles.heroImage}>
        <img src={imgHero} alt="" />
      </div>
    </div>
  );
}
