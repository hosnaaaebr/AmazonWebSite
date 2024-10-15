
import { forwardRef, useContext } from 'react';
import styles from './SubContainer.module.scss';
import { HiArrowLeft } from "react-icons/hi";
import AmazonContext from '../../../Context/NavBar/AmazonContext';
import { SlArrowRight } from "react-icons/sl";

const SubContainer = forwardRef((props, ref) => { 
  const { setSubContainer } = useContext(AmazonContext);
  const { state } = props;

  const getClassNames = (state) => {
    return `${styles.subContainer} ${styles[state]}`; // Using CSS module for styling
  };
  

  return (
    <div className={getClassNames(state)} ref={ref}>
      <div className={styles.subHeader} onClick={() => setSubContainer(false)}>
        <HiArrowLeft className={styles.arrowLeft} />
        <span>Main menu</span>
      </div>
      <div className={styles.sideNavContentHeader}>
        <h3 style={{color:"black" , marginLeft:"25px" , marginTop:"15px", marginBottom:"15px"}}>Stream Music</h3>
        <div className={styles.amazonMusic}>Amazon Music Unlimited
        </div>
        <div className={styles.amazonMusic}>Free Streaming Music
          
        </div>
        <div className={styles.amazonMusic}>Podcasts
          
        </div>
        <div className={styles.amazonMusic}>Open Web Player
          
        </div>
        <div className={styles.amazonMusic}>Download the app
          
        </div>
      </div>

      <div style={{ minHeight: "65px" }}></div>
    </div>
  );
});

export default SubContainer;
