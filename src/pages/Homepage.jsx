import styles from "./Homepage.module.css";
import Hero from "../components/hero/Hero";
import MainInfo from "../components/squareInfo/Squareinfo";
import NurseTeam from "../components/nurse-team/NurseTeam";
import iconCalendar from "../assets/icons/icon-calendary.png";
import iconMoney from "../assets/icons/icon-money.png";
import Disclaimer from "../components/disclaimer/Disclaimer";
import ServiceArea from "../components/serviceArea//serviceArea";
import Services from "../components/services/Services";

function Homepage() {
  return (
    <div>
      <Hero />
      <MainInfo />
      <Services />
      <ServiceArea />
      <div className={styles.bannerInfo}>
        <div>
          <img src={iconCalendar} alt="Calendrier icon" />
          <p>Disponibles 7 jours sur 7.</p>
          <p>
            Vous pouvez nous contacter par téléphone et SMS tous les jours de
            l’année.
          </p>
        </div>
        <div>
          <img src={iconMoney} alt="Paiement icon" />
          <p>PAIEMENTS ACCEPTÉS</p>
          <p>Espèces</p>
          <p>Chèque</p>
        </div>
      </div>
      <NurseTeam />
      <Disclaimer />
    </div>
  );
}

export default Homepage;
