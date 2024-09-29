import styles from './SideNavRow.module.scss';
import { SlArrowRight } from "react-icons/sl";
import { useContext } from 'react';
import AmazonContext from '../../../Context/NavBar/AmazonContext';
const SideNavRow = (props) => {
  const {text , entries} = props;
  const {setSubContainer ,setSubContainerEntries} = useContext(AmazonContext);
  const openRow = () => {
    setSubContainer(true);
    if (entries && Array.isArray(entries)) {
      setSubContainerEntries(entries); // The entries to display in SubContainer
    }
  }
    
  return (
    <div className={styles.sideNavRow} onClick={() => entries && openRow()}>
       <div>{text}</div> 
       <SlArrowRight className={styles.arrowRight} />
       
    </div>
  )
}

export default SideNavRow;