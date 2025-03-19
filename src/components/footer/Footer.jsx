import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import iconLogo from "../../assets/icons/logo-infirmiere.png";
import Button from "../button/Button";
import ContactInfo from "../contactInfo/ContactInfo";
import { CalendarClock } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.containerLogo}>
        <NavLink to="/">
          <img src={iconLogo} alt="Logo Infirmiere" />
        </NavLink>
        <NavLink to="/contact">
          <Button>Contacter</Button>
        </NavLink>
        <p> © 2025. Tous droits réservés. </p>
      </section>
      <section className={styles.containerMiddle}>
        <div className={styles.containerHour}>
          <h3>Horaires</h3>
          <CalendarClock color="#d78b8b" />
          <p>7j/7 de 7h à 17h.</p>
        </div>
        <div className={styles.containerLinks}></div>
        <h3>Liens pratiques</h3>
        <ul>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/questions-frequentes">Questions fréquentes</NavLink>
          </li>
          <li>
            <NavLink to="/mention-legales">Mentions Légales</NavLink>
          </li>
        </ul>
      </section>
      <ContactInfo />
    </footer>
  );
}
