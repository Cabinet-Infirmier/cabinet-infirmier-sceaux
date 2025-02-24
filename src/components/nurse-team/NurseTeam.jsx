import Nurse from "../nurse/Nurse";
import styles from "./NurseTeam.module.css";

function NurseTeam() {
  return (
    <section className={styles.nurses}>
      <h2>Infirmières au cabinet</h2>
      <div className={styles.container}>
        <Nurse name="Angelina" fileName="angelina.png" />
        <Nurse name="Angelina" fileName="angelina.png" />
        <Nurse name="Angelina" fileName="angelina.png" />
        <Nurse name="Angelina" fileName="angelina.png" />
      </div>
    </section>
  );
}

export default NurseTeam;
