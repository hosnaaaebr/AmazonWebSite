import { forwardRef } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import styles from './DropDownButton.module.scss';
const DropDownButton = forwardRef((props , ref) => {
  const {children , open , toggle} = props;
  return (
    <div className={`${styles.dropDownBtn} ${open ? styles.btnOpen : null}`} onClick={(e) => { e.stopPropagation(); toggle(); }} ref={ref}>{children}
    <span className={styles.toggleIcon}><IoMdArrowDropdown /></span>
    </div>
  )
})

export default DropDownButton;