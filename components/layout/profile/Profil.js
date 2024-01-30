import styles from "./Profil.module.css";

function Profil() {
  return (
    <div className={styles.flexbox}>
      <div className={styles.profil}>
        <div className={styles.profil - bild}>
          <img
            className={styles.profil - bild - img}
            src="C:\Users\tonis\Pictures\techstarter_gmbh_logo.jpg"
          />
        </div>
        <div className={styles.profil - kram}>
          <div className={styles.profil - info}>
            <label> Techstarter</label>
            <button>follow</button>
            <button>send message</button>
            <button>...</button>
          </div>
          <div className={styles.profil - stats}>
            <label className={styles.stat}> 4 Beiträge </label>
            <label className={styles.stat}> 73 Follower </label>
            <label className={styles.stat}> 20 gefolgt </label>
          </div>
          <div className={styles.profil - bio}>
            <h5>T E C H S T A R T E R</h5>
            <h5>Bildung</h5>
            <h5>☁️ in 12 Monaten zum Cloud Spezialist</h5>
            <h5>🏠 100% online</h5>
            <h5>✍🏼 Kursstart: 22.01.2024</h5>
            <h5>💻 Laptop inklusive</h5>
            <h5>Informiere dich jetzt ⤵</h5>
            <h5>Herzogspitalstr. 24, Munich, Germany 80331</h5>
            <h5 href="">linktr.ee/techstarter</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
