import styles from "./SquareInfo.module.css";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";

export default function SquareInfo() {
  return (
    <div className={styles.squareInfo}>
      <div className={styles.container}>
        <h3>A PROPOS DE NOUS</h3>
        <p>
          Le cabinet se compose de 4 infirmières diplômées d&apos;état réparties
          en 2 tournées. Il se trouve au sein du centre santé sport Robinson, où
          excercent également 3 kinésithérapeutes et 1 pédicure podologue.
        </p>

        <strong>
          Les infirmières vous proposent des soins au cabinet et à votre
          domicile sur rendez-vous. Nous pratiquons le tiers payant sécurité
          sociale et mutuelle (pas d&apos;avance de frais).
        </strong>
        <p>
          Dans le cadre de la formation continue, nous effectuons régulièrement
          des formations afin de nous adapter aux nouvelles techniques,
          protocoles de soins et innovations.
        </p>
        <NavLink to="/services">
          <Button>En savoir Plus</Button>
        </NavLink>
      </div>
    </div>
  );
}
