import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "../../assets/icons/logo-infirmiere.png";

function Logo() {
  return (
    <Link to="/">
      <div className={styles.logo}>
        <img src={logo} alt="logo cabinet" />
        <h1>Cabinet Infirmier</h1>
      </div>
    </Link>
  );
}

export default Logo;
