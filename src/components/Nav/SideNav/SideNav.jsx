
import styles from "./SideNav.module.scss";
import { forwardRef, useContext, useRef } from 'react';
import img from '../../../assets/images/user.avif';
import SideNavContent from "../SideNavContent/SideNavContent";
import SubContainer from "../SubContainer/SubContainer";
import { Transition } from 'react-transition-group';
import AmazonContext from '../../../Context/NavBar/AmazonContext';

const SideNav = forwardRef((props, ref) => { // Wrap the component in forwardRef
  const { state } = props;
  const { subContainer, setSubContainer } = useContext(AmazonContext);
  
  // Refs for content
  const sideNavContentRef = useRef(null);
  const subContainerRef = useRef(null);

  const getAnimationStyle = () => {
    switch (state) {
      case "entering":
        return { transform: 'translateX(0)', animation: 'moveSideBar .3s forwards' };
      case "entered":
        return { transform: 'translateX(0)' };
      case "exiting":
        return { transform: 'translateX(-420px)', animation: 'moveSideBar .3s reverse forwards' };
      case "exited":
        return { transform: 'translateX(-420px)' };
      default:
        return {};
    }
  };

  return (
    <div
      ref={ref} // Now ref will correctly work because of forwardRef
      className={styles.sideNav}
      style={getAnimationStyle()}
    >
      <div className={styles.sidNavHeader}>
        <div className={styles.imgContainer}>
          <img src={img} alt="user profile" />
        </div>
        <span>Hello, Sign In</span> 
      </div>

      {/* Transition for SideNavContent */}
      <Transition
        in={!subContainer}
        timeout={300}
        unmountOnExit
        mountOnEnter
        nodeRef={sideNavContentRef} // nodeRef ensures ref is passed to the DOM element
      >
        {(state) => (
          <SideNavContent ref={sideNavContentRef} state={state} />
        )}
      </Transition>

      {/* Transition for SubContainer */}
      <Transition
        in={subContainer}
        timeout={300}
        unmountOnExit
        mountOnEnter
        nodeRef={subContainerRef} // nodeRef ensures ref is passed to the DOM element
      >
        {(state) => (
          <SubContainer ref={subContainerRef} state={state} setSubContainer={setSubContainer} />
        )}
      </Transition>
    </div>
  );
});

export default SideNav;
