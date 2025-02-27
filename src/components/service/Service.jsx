import styles from "./Service.module.css";

function Service({ name, fileName }) {
  return (
    <div className={styles.service}>
      <img src={`./images/icons/${fileName}`} alt={`${fileName}`} />
      <p>{name}</p>
    </div>
  );
}

export default Service;
