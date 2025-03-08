import styles from "../modal/Modal.module.css";
import Carousel from "../carousel/Carousel";

export default function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className={styles.container}>
      <div className={styles.modalContainer}>
        <Carousel onClose={onClose} />
      </div>
    </div>
  );
}
