import Service from "../service/Service";
import styles from "./Services.module.css";
import Button from "../button/Button";

function Services() {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <div className={styles.firstRow}>
          <Service name="Soins infirmiers" fileName="nurse-icon.svg" />
          <Service
            name="Soins à domicile pour les patients dépendants"
            fileName="home-care.svg"
          />
          <Service
            name="Gestion des traitements"
            fileName="treatment-management.svg"
          />
        </div>

        <div className={styles.secondRow}>
          <Service name="Vaccination" fileName="syringe-icon.svg" />
          <Service name="Pansements" fileName="injury-icon.svg" />
          <Service
            name="Dossier de soins"
            fileName="medical-history-icon.svg"
          />
          <Service name="Charte du patient" fileName="patient-charter.svg" />
        </div>
        <Button>Voir les services</Button>
      </div>
    </div>
  );
}

export default Services;
