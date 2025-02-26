import styles from "./Nurse.module.css";

function Nurse({ name, fileName }) {
  return (
    <li className={styles.nurse}>
      <img src={`./images/nurses/${fileName}`} alt={`${fileName}`} />
      <p>{name}</p>
    </li>
  );
}

export default Nurse;
