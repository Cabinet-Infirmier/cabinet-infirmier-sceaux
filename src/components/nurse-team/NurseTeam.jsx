import { Link } from "react-router-dom";
import Button from "../button/Button";
import Nurse from "../nurse/Nurse";
import styles from "./NurseTeam.module.css";

function NurseTeam() {
  return (
    <section className={styles.nurses}>
      <h2>Infirmières au cabinet</h2>
      <ul className={styles.container}>
        <Nurse name="Angelina" fileName="angelina.png" />
        <Nurse name="Angelina" fileName="angelina.png" />
        <Nurse name="Angelina" fileName="angelina.png" />
        <Nurse name="Angelina" fileName="angelina.png" />
      </ul>
    </section>
  );
}

export default NurseTeam;
