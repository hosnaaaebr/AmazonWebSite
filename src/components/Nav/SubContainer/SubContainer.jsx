
// import { forwardRef, useContext } from 'react';
// import styles from './SubContainer.module.scss';
// import { HiArrowLeft } from "react-icons/hi";
// import AmazonContext from '../../Context/NavBar/AmazonContext';
// import { SlArrowRight } from "react-icons/sl";

// const SubContainer = forwardRef((props, ref) => { // Use forwardRef
//   const { setSubContainer, setSubContainerEntries } = useContext(AmazonContext);
//   const { state } = props;

//   const getStyle = (state) => {
//     switch (state) {
//       case "entering":
//         return { animation: "moveSubContainer .3s forwards" };
//       case "entered":
//         return { transform: "translateX(0px)" };
//       case "exiting":
//       case "exited":  // Handle exiting/exited states similarly
//       default:
//         return { animation: "moveSubContainer .3s reverse backwards" };
//     }
//   };

//   return (
//     <div className={styles.subContainer} style={getStyle(state)} ref={ref}> {/* Apply the ref here */}
//       <div className={styles.subHeader} onClick={() => setSubContainer(false)}>
//         <HiArrowLeft className={styles.arrowLeft} />
//         <span>Main menu</span>
//       </div>

//       {/* Example dynamic rendering */}
//       {Array.isArray(setSubContainerEntries) && setSubContainerEntries.map((subEntry) => (
//         <React.Fragment key={subEntry.id}>
//           <div className={styles.sideNavContentHeader}>
//             {subEntry.title}
//           </div>
//           {subEntry?.entries?.entries.length > 0 ? (
//             subEntry.entries.entries.map((entry, index) => (
//               <div className={styles.amazonMusic} key={index}>
//                 {console.log({entry})}
//                 <div>{entry[0]}</div>
//                 <SlArrowRight className={styles.arrowRight} />
//               </div>
//             ))
//           ) : (
//             <div>No entries available</div>
//           )}
//         </React.Fragment>
//       ))}

//       <div style={{ minHeight: "65px" }}></div>
//     </div>
//   );
// });

// export default SubContainer;
import { forwardRef, useContext } from 'react';
import styles from './SubContainer.module.scss';
import { HiArrowLeft } from "react-icons/hi";
import AmazonContext from '../../../Context/NavBar/AmazonContext';
import { SlArrowRight } from "react-icons/sl";

const SubContainer = forwardRef((props, ref) => { 
  const { setSubContainer, setSubContainerEntries } = useContext(AmazonContext);
  const { state } = props;

  const getStyle = (state) => {
    switch (state) {
      case "entering":
        return { animation: "moveSubContainer .3s forwards" };
      case "entered":
        return { transform: "translateX(0px)" };
      case "exiting":
      case "exited": 
      default:
        return { animation: "moveSubContainer .3s reverse backwards" };
    }
  };

  return (
    <div className={styles.subContainer} style={getStyle(state)} ref={ref}>
      <div className={styles.subHeader} onClick={() => setSubContainer(false)}>
        <HiArrowLeft className={styles.arrowLeft} />
        <span>Main menu</span>
      </div>

      {/* Render only for the first entry with id: 0 */}
      {Array.isArray(setSubContainerEntries) && setSubContainerEntries.map((subEntry) => (
        <div key={subEntry.id}>
          <div className={styles.sideNavContentHeader}>
            {subEntry.title}
          </div>
          {subEntry.id === 0 && subEntry?.entries?.entries.length > 0 ? (
            subEntry.entries.entries.map((entry, index) => (
              <div className={styles.amazonMusic} key={index}>
                {console.log({entry})}
                <div>{entry[0]}</div>
                <SlArrowRight className={styles.arrowRight} />
              </div>
            ))
          ) : (
            <div>Nothing found</div>
          )}
        </div>
      ))}

      <div style={{ minHeight: "65px" }}></div>
    </div>
  );
});

export default SubContainer;
