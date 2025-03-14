import styles from "./Nurse.module.css";

function Nurse({ name, fileName }) {
  return (
    <li className={styles.nurse}>
      <img src={`./images/nurses/${fileName}`} alt={`${fileName}`} />
      <p className="mt-5">{name}</p>
    </li>
  );
}

export default Nurse;
