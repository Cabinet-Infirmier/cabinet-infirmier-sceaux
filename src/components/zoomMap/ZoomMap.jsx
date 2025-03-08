import ZoomImage from "../zoomImage/ZoomImage";
import IconMap from "../../../public/images/icons/map-icon.svg";
import MapImage from "../../assets/images/sector-map.png";
import styles from "../zoomMap/ZoomMap.module.css";

export default function ZoomMap() {
  return (
    <section className={styles.container}>
      <ZoomImage src={MapImage} alt="Carte de zones de service" />
      <div className={styles.title}>
        <img src={IconMap} alt="Cabinet medical icône" />
        <h4>Secteur d&apos;intervention à domicile</h4>
      </div>
    </section>
  );
}
