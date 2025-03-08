import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import iconLogo from "../../assets/icons/logo-infirmiere.png";
import Button from "../button/Button";
import {
  CalendarClock,
  MapPin,
  Phone,
  MessageCircleMore,
  AtSign,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerLogo}>
        <NavLink to="/">
          <img className={styles.logo} src={iconLogo} alt="Logo Infirmiere" />
        </NavLink>
        <NavLink to="/contact">
          <Button>Contacter</Button>
        </NavLink>
      </div>
      <div className={styles.container}>
        <h3>Horaires</h3>
        <div className={styles.containerHours}>
          <CalendarClock color="#d78b8b" />
          <p>7j/7 de 7h à 17h.</p>
        </div>
        <h3>Liens pratiques</h3>
        <ul>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="#nurseTeam">Nos infirmières</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <h3>Contact</h3>
        <div className={styles.footerInfo}>
          <MapPin color="#d78b8b" />
          <a href="https://www.google.com/maps/dir//Infirmi%C3%A8res+%C3%A0+domicile:+Mme+THOMINOT-+Mme+NOEL-+Mme+SAINT-JOANNIS+%26+Mme+PELTRET,+18+square+robinson+RDC+Gauche+interphone+15,+92330+Sceaux/@48.779387,2.2796306,17z/data=!3m1!5s0x47e670b27e1edec1:0xf9e118013997a658!4m18!1m8!3m7!1s0x47e670b27f898bfb:0x4a7d1c0fa00bfb97!2sInfirmi%C3%A8res+%C3%A0+domicile:+Mme+THOMINOT-+Mme+NOEL-+Mme+SAINT-JOANNIS+%26+Mme+PELTRET!8m2!3d48.7793781!4d2.2822223!15sCkxDYWJpbmV0IGluZmlybWllcnMgMTggc3F1YXJlIHJvYmluc29uIFJEQyBHYXVjaGUgaW50ZXJwaG9uZSAxNSwgOTIzMzAgU2NlYXV4kgEObnVyc2luZ19hZ2VuY3ngAQA!16s%2Fg%2F1yj4k3nxk!4m8!1m0!1m5!1m1!1s0x47e670b27f898bfb:0x4a7d1c0fa00bfb97!2m2!1d2.2822223!2d48.7793781!3e3?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D">
            Cabinet infirmiers
            <br></br>
            18 square robinson RDC Gauche
            <br></br>
            interphone 15, 92330 Sceaux
          </a>
        </div>
        <div className={styles.footerInfo}>
          <Phone color="#d78b8b" />
          <a href="tel:0146600974">01.46.60.09.74</a>
        </div>
        <div className={styles.footerInfo}>
          <MessageCircleMore color="#d78b8b" />
          <a href="sms:0749703118">07.49.70.31.18</a>
        </div>
        <div className={styles.footerInfo}>
          <AtSign color="#d78b8b" />
          <NavLink to="/contact">cabinet.idel.sceaux@gmail.com</NavLink>
        </div>
      </div>
    </footer>
  );
}
