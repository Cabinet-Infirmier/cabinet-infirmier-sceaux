import styles from "./SquareInfo.module.css";

export default function SquareInfo() {
  return (
    <div className={styles.squareInfo}>
      <h3 className="pink">A PROPOS DE NOUS</h3>
      <p>
        Le cabinet se compose de 4 infirmières diplômées d’état réparties en 2
        tournées, Il se trouve ausein du centre santé sport Robinson, où
        excercent également 3 kinésithérapeutes et 1 pédicure podologue.
        <br />
        <b>
          Les infirmières vous proposent des soins au cabinet et à votre
          domicile sur rendez-vous. Nous pratiquons le tiers payant sécurité
          sociale et mutuelle (pas d’avance de frais).
        </b>
        Dans le cadre de la formation continue, nous effectuons régulièrement
        des formations afin de nous adapter aux nouvelles techniques, protocoles
        de soins et innovations.
      </p>
      <button>En savoir Plus</button>
    </div>
  );
}
