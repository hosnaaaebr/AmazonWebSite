
import styles from './SideNavContent.module.scss';
import { forwardRef, useContext } from 'react';
import AmazonContext from '../../../Context/NavBar/AmazonContext';
import SideNavRow from '../SideNavRow/SideNavRow';

const SideNavContent = forwardRef((props, ref) => {
  const { entryStore } = useContext(AmazonContext);
  const { state } = props;

  const getAnimationStyle = (state) => {
    switch (state) {
      case 'entering':
        return { animation: 'moveMainContainer .3s forwards' };
      case 'exiting':
        return { animation: 'moveMainContainer .3s reverse forwards' };
      default:
        return {};
    }
  };

  return (
    <div className={styles.sideNavContainer} style={getAnimationStyle(state)} ref={ref}>
      {Boolean(entryStore) && 
        entryStore.map((entry) => (
          <div key={entry.id}>
            {/* Title for each entry section */}
            <div className={styles.sideNavContentHeader}>
              {entry.title}
            </div>

            {/* Loop over titles array and render */}
            {entry.entries.titles.map((subEntry, index) => (
              !entry.entries.types.rows ? (
                <a href="#" key={index}>
                  <div className={styles.sideNavContent}>
                    {subEntry}
                  </div>
                </a>
              ) : (
                <SideNavRow key={index} text={subEntry} entries={entry.entries?.entries} />
              )
            ))}
          </div>
        ))
      }
      <div style={{ minHeight: "65px" }}></div>
    </div>
  );
});

export default SideNavContent;
