import { useEffect, useRef, useState } from "react";
import styles from "../zoomImage/ZoomImage.module.css";

export default function ZoomImage({ ...attributes }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleZoomIn = () => {
    setScale((scale) => scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale((scale) => scale - 0.1);
  };

  //Effect handler for image dragging
  useEffect(() => {
    const image = imageRef.current;
    let isDragging = false;
    let prevPosition = { x: 0, y: 0 };

    //Mouse down event handler for starting image drag
    const handleMouseDown = (e) => {
      isDragging = true;
      prevPosition = { x: e.clientX, y: e.clientY };
    };

    //Mouse move event handler for dragging the image
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevPosition.x;
      const deltaY = e.clientY - prevPosition.y;
      prevPosition = { x: e.clientX, y: e.clientY };
      setPosition((position) => ({
        x: position.x + deltaX,
        y: position.y + deltaY,
      }));
    };

    //Mouse up event handler for eneding image drag
    const handleMouseUp = () => {
      isDragging = false;
    };

    //Add event listeners
    image?.addEventListener("mousedown", handleMouseDown);
    image?.addEventListener("mousemove", handleMouseMove);
    image?.addEventListener("mouseup", handleMouseUp);

    //Remove event listeners
    return () => {
      image?.removeEventListener("mousedown", handleMouseDown);
      image?.removeEventListener("mousemove", handleMouseMove);
      image?.removeEventListener("mouseup", handleMouseUp);
    };
  }, [imageRef, scale]);

  return (
    <div className={styles.zooImage}>
      <div className={styles.btn_container}>
        <button onClick={handleZoomIn} className={styles.btn}>
          +
        </button>
        <button onClick={handleZoomOut} className={styles.btn}>
          -
        </button>
      </div>
      <img
        ref={imageRef}
        draggable={false}
        style={{
          width: "40vw",
          height: "auto",
          cursor: "move",
          transformOrigin: "top left",
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        }}
        {...attributes}
      />
    </div>
  );
}
