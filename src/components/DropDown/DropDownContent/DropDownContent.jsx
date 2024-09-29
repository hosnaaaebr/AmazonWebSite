import { forwardRef } from 'react';
import styles from './DropDownContent.module.scss';
const DropDownContent = forwardRef((props, ref) => {
  const {children , open} = props;
  return (
    <div className={`${styles.dropDownContent} ${open ? styles.openContent : null}`} ref={ref} >
    {children}
  </div>
  )
})

export default DropDownContent;