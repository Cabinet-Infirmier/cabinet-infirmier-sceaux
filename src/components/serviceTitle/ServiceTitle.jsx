import styles from "../serviceTitle/ServiceTitle.module.css";

export default function ServiceTitle({ title, icon, children }) {
  return (
    <div className={styles.container}>
      <div>
        <img
          id={icon}
          src={`/images/icons/${icon}.svg`}
          alt={`icon ${title}`}
        />
      </div>
      <div className={styles.titles}>
        <h3 className="uppercase text-left">{title}</h3>
        {children}
      </div>
    </div>
  );
}
