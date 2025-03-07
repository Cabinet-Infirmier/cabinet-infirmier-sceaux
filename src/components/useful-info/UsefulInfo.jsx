import styles from "./UsefulInfo.module.css";

function UsefulInfo() {
  return (
    <div className={styles.bannerInfo}>
      <div className={styles.container}>
        <img src="/images/icons/icon-calendary.png" alt="Calendrier icon" />
        <h4>Disponibles 7 jours sur 7.</h4>
        <p>
          Vous pouvez nous contacter par téléphone et SMS tous les jours de
          l’année.
        </p>
      </div>
      <div className={styles.container}>
        <img src="/images/icons/icon-money.png" alt="Paiement icon" />
        <h4>PAIEMENTS ACCEPTÉS</h4>
        <p>Espèces</p>
        <p>Chèque</p>
      </div>
    </div>
  );
}

export default UsefulInfo;
