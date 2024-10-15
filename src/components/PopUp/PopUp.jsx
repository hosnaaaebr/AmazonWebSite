import styles from './PopUp.module.scss';
import RemoveAdd from './RemoveAdd/RemoveAdd';
const PopUp = ({ alert}) => {
console.log(alert)
if (alert === null) return null;
  return (
    <div className={styles.popUp}>
      <RemoveAdd alert={alert}/>
    </div>
  )
}

export default PopUp;