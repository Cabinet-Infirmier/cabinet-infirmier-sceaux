import styles from "./Service.module.css";
import { Link } from "react-router-dom";

function Service({ id, name, fileName }) {
  return (
    <div>
      <Link to={`services#${id}`} className={styles.service}>
        <img src={`./images/icons/${fileName}`} alt={`${fileName}`} />
        <p>{name}</p>
      </Link>
    </div>
  );
}

export default Service;
