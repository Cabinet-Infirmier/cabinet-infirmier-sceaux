import styles from "./Nurse.module.css";

function Nurse({ name, fileName }) {
  return (
    <div className={styles.nurse}>
      <img src={`./images/nurses/${fileName}`} alt={`${fileName}`} />
      <p>{name}</p>
    </div>
  );
}

export default Nurse;
