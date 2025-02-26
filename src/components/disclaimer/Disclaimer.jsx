import styles from "./Disclaimer.module.css";

function Disclaimer() {
  return (
    <div className={styles.disclaimer}>
      <div className={styles.container}>
        Ce site est uniquement informatif et a pour objectif de faciliter la
        visibilité des horaires du cabinet infirmières libérales, son accès et
        son fonctionnement. ce site tient en compte l&apos;article R.4312-37 du
        code de la santé publique.
      </div>
    </div>
  );
}

export default Disclaimer;
