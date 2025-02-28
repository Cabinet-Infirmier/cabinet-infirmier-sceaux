import IconCabinet from "../../assets/icons/icon-cabinet.png";
import IconAddress from "../../assets/icons/icon-address.png";
import MapImage from "../../assets/images/sector-map.png";
import ZoomImage from "../zoomImage/ZoomImage";
import styles from "../serviceArea/ServiceArea.module.css";
import CabinetImage from "../../assets/images/cabinet-1.jpg";
import Button from "../button/Button";

export default function ServiceArea() {
  return (
    <div className={styles.ServiceArea}>
      <div className={styles.Container}>
        <div className={styles.CabinetContainer}>
          <img
            className={styles.CabinetImage}
            src={CabinetImage}
            alt="Image du cabinet"
          />
        </div>
        <div className={styles.ButtonContainer}>
          <Button>Voir Plus</Button>
        </div>
        <div className={styles.Title}>
          <img src={IconAddress} alt="Cabinet medical icône" />
          <h4>Secteur d’intervention à domicile</h4>
        </div>
      </div>
      <div className={styles.Container}>
        <ZoomImage src={MapImage} alt="Carte de zones de service" />
        <div className={styles.Title}>
          <img src={IconCabinet} alt="Cabinet medical icône" />
          <h4>Secteur d’intervention à domicile</h4>
        </div>
      </div>
    </div>
  );
}
