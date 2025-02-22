import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <div className={styles.logo}>Cabinet Infirmières</div>
    </Link>
  );
}

export default Logo;
