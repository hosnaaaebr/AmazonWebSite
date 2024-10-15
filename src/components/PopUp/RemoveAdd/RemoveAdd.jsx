
import styles from './RemoveAdd.module.scss';

const RemoveAdd = ({ alert }) => {
  if (!alert) return null; // Don't show anything if there's no alert

  return (
    <div className={`${alert === "added" ? styles.add : styles.remove}`}>
      <div className={styles.addStyle}>
        <div className={styles.checkBox}>
          <div className={styles.box}></div>
          <div style={{ position: "absolute" }}>
            <div className={styles.roatating}></div>
          </div>
        </div>
        <div aria-live="polite" role="status">
          {alert === "added" ? "Added to the Cart!" : "Removed from the Cart!"}
        </div>
      </div>
    </div>
  );
};

export default RemoveAdd;
