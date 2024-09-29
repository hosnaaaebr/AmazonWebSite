
import styles from './Nav.module.scss';
import { Transition } from 'react-transition-group';
import HamburgerButton from './HamburgerButton/HamburgerButton';
import SideNav from './SideNav/SideNav';
import { useState, useRef, useContext } from 'react';
import AmazonContext from '../../Context/NavBar/AmazonContext';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const sideNavRef = useRef(null); // Create a mutable ref for the side nav
  const { entryStore } = useContext(AmazonContext);

  const openNav = () => {
    setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const getAnimationStyle = (state) => {
    switch (state) {
      case 'entering':
        return { opacity: 1, animation: 'show .3s forwards' };
      case 'entered':
        return { opacity: 1 };
      case 'exiting':
        return { opacity: 0, animation: 'show .3s reverse forwards' };
      case 'exited':
        return { opacity: 0 };
      default:
        return {};
    }
  };

  return (
    <div className={styles.navContainer}>
      <HamburgerButton click={openNav} />

      {/* SideNav Transition */}
      <Transition
        in={navOpen && Boolean(entryStore)}
        timeout={300}
        mountOnEnter
        unmountOnExit
        nodeRef={sideNavRef} // Use nodeRef for DOM element in Transition
      >
        {(state) => (
          <>
            <SideNav ref={sideNavRef} state={state} />
            <div
              className={styles.overlay}
              style={getAnimationStyle(state)}
              onClick={closeNav}
            />
          </>
        )}
      </Transition>

      {/* Sample links */}
      <div><p>Today's Deals</p></div>
      <div><p>Customer Service</p></div>
      <div><p>Registry</p></div>
      <div><p>Gift Cards</p></div>
      <div><p>Sell</p></div>
    </div>
  );
};

export default Nav;
