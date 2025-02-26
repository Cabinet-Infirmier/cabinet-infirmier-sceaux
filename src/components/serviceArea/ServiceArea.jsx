import IconCabinet from "../../assets/icons/icon-cabinet.png";
import MapImage from "../../assets/images/sector-map.png";
import ZoomImage from "../zoomImage/ZoomImage";
import styles from "../serviceArea/ServiceArea.module.css";

export default function ServiceArea() {
  return (
    <div className={styles.ServiceArea}>
      <div className={styles.Container}></div>
      <div className={styles.Container}>
        <div className={styles.MapContainer}>
          <ZoomImage src={MapImage} alt="Carte de zones de service" />
        </div>
        <div className={styles.MapTitle}>
          <img src={IconCabinet} alt="Cabinet medical icône" />
          <h4>Secteur d’intervention à domicile</h4>
        </div>
      </div>
    </div>
  );
}
