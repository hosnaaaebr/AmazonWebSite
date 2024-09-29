import styles from './DropDownItem.module.scss';
const DropDownItem = ({children , onClick}) => {
  return (
    <div className={styles.dropDownItem} onClick={onClick}>{children}</div>
  )
}

export default DropDownItem;