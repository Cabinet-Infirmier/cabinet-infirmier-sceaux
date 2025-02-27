import Service from "../service/Service";
import styles from "./Services.module.css";
import Button from "../button/Button";

function Services() {
  return (
    <div className={styles.services}>
      <div className={styles.firstRow}>
        <Service name="Soins infirmiers" fileName="nurse-icon.svg" />
        <Service
          name="Soins à domicile pour les patients dépendants"
          fileName="nurse-icon.svg"
        />
        <Service name="Gestion des traitements" fileName="nurse-icon.svg" />
      </div>

      <div className={styles.secondRow}>
        <Service name="Vaccination" fileName="nurse-icon.svg" />
        <Service name="Pansements" fileName="nurse-icon.svg" />
        <Service name="Dossier de soins" fileName="nurse-icon.svg" />
        <Service name="Chrte du patient" fileName="nurse-icon.svg" />
      </div>
      <Button>Voir les services</Button>
    </div>
  );
}

export default Services;
