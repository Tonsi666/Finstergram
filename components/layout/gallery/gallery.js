import styles from "./gallery.module.css";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <div id="loading">Loading...</div>
      <div id="imageGrid" className={styles.grid - container}></div>
    </div>
  );
}

export default Gallery;
