import styles from "../serviceTitle/serviceTitle.module.css";

export default function ServiceTitle({ title, icon, children }) {
  return (
    <div className={styles.container}>
      <div>
        <img src={`/images/icons/${icon}.png`} alt={`icon ${title}`} />
      </div>
      <div className={styles.titles}>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}
