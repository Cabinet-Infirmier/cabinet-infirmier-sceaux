import IconCabinet from "../../assets/icons/icon-cabinet.png";
import IconAddress from "../../assets/icons/icon-address.png";
import MapImage from "../../assets/images/sector-map.png";
import ZoomImage from "../zoomImage/ZoomImage";
import styles from "../serviceArea/ServiceArea.module.css";
import CabinetImage from "/images/cabinet/cabinet-1.jpg";
import Modal from "../modal/Modal";
import Button from "../button/Button";
import { useState } from "react";

export default function ServiceArea() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.serviceArea}>
      <Modal
        className={styles.modal}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
      <div className={styles.container}>
        <div className={styles.cabinetContainer}>
          <img
            className={styles.cabinetImage}
            src={CabinetImage}
            alt="Image du cabinet"
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button onClick={() => setOpenModal(true)}>Voir Plus</Button>
        </div>
        <div className={styles.title}>
          <img src={IconAddress} alt="Cabinet medical icône" />
          <h4>Cabinet infirmier</h4>
        </div>
      </div>
      <div className={styles.container}>
        <ZoomImage src={MapImage} alt="Carte de zones de service" />
        <div className={styles.title}>
          <img src={IconCabinet} alt="Cabinet medical icône" />
          <h4>Secteur d&apos;intervention à domicile</h4>
        </div>
      </div>
    </div>
  );
}
