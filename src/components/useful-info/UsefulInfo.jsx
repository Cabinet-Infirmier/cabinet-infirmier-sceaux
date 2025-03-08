import styles from "./UsefulInfo.module.css";

const icons = [
  { img: "calendar-icon.svg", fileName: "Icon de calendrier" },
  { img: "money-icon.svg", fileName: "Icon de paiement" },
];

function UsefulInfo() {
  return (
    <div className={styles.bannerInfo}>
      {/* First Section */}
      <div className={styles.container}>
        <img src={`./images/icons/${icons[0].img}`} alt={icons[0].fileName} />
        <h4>Disponibles 7 jours sur 7.</h4>
        <p>
          Vous pouvez nous contacter par téléphone et SMS tous les jours de
          l’année.
        </p>
      </div>

      {/* Second Section */}
      <div className={styles.container}>
        <img src={`./images/icons/${icons[1].img}`} alt={icons[1].fileName} />
        <h4>Disponibles 7 jours sur 7.</h4>
        <h4>PAIEMENTS ACCEPTÉS</h4>
        <p>Espèces</p>
        <p>Chèque</p>
      </div>
    </div>
  );
}

export default UsefulInfo;
