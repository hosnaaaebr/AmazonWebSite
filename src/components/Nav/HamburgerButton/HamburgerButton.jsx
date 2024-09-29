import styles from './HamburgerButton.module.scss';
import img from '../../../assets/images/menu.avif';
const HamburgerButton = (props) => {
  return (
    <div className={styles.menu} onClick={props.click}>
        <div className={styles.imgContain}>
            <img src={img} alt="" />
        </div>
        <span>All</span>
    </div>
  )
}

export default HamburgerButton;