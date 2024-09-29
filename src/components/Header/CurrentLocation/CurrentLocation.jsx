import { useState, useEffect } from 'react';
import styles from './CurrentLocation.module.scss';
import locationImg from "../../../assets/images/location.avif";
const CurrentLocation = () => {
 const [location, setLocation] = useState({ latitude: null});
 const [error, setError] = useState(null);
  useEffect(() => {
    if ('geolocation' in navigator) {
        const watchId = navigator.geolocation.watchPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude
            });
          },
          (err) => {
            setError(err.message);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
         // Cleanup on component unmount
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setError('Geolocation is not supported by your browser.');
    }  
}, []);

  return (
    <div className={styles.location}>
      <span className={styles.deliver}>Deliver to</span>
      <div className={styles.liveLoc}>
        <div className={styles.imgLoc}>
        <img src={locationImg} alt="" />
        </div>
      {error ? <span className={styles.unknown}>Unknown</span> : (
        <>
        <span>{location.latitude} </span>
        </>
      )}
      </div>
    </div>
  );
}

export default CurrentLocation;