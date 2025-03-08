import styles from "../serviceArea/ServiceArea.module.css";
import IconCabinet from "../../../public/images/icons/cabinet-icon.svg";
import CabinetImage from "/images/cabinet/cabinet-1.jpg";
import Modal from "../modal/Modal";
import Button from "../button/Button";
import ZoomMap from "../zoomMap/ZoomMap.jsx";
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
      <section className={styles.container}>
        <div className={styles.cabinetContainer}>
          <img
            className={styles.cabinetImage}
            src={CabinetImage}
            alt="Cabinet"
          />
          <Button onClick={() => setOpenModal(true)}>Voir Plus</Button>
        </div>

        <div className={styles.title}>
          <img src={IconCabinet} alt="Cabinet medical icône" />
          <h4>Cabinet infirmier</h4>
        </div>
      </section>
      <ZoomMap />
    </div>
  );
}
