import { useState } from "react";
import styles from "./Carousel.module.css";

export default function Carousel() {
  const images = ["cabinet-1.jpg", "cabinet-2.jpg", "cabinet-3.jpg"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {}, 500);
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Carousel}>
        <img
          src={`/images/cabinet/${selectedImage}`}
          alt="Cabinet images"
          className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}
        />
        <button onClick={previous}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </div>
    </div>
  );
}
