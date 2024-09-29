
import DropDownButton from './DropDownButton/DropDownButton';
import DropDownContent from './DropDownContent/DropDownContent';
import styles from './DropDown.module.scss';
import { useState, useEffect, useRef } from 'react';

const DropDown = ({ buttonText, content}) => {
  const [open, setOpen] = useState(false);
  
  const dropDownRef = useRef();
  const buttonRef = useRef();
  const contentRef = useRef();

  const toggleDropDown = () => {
    setOpen((open) => !open);
  };
  
  useEffect(() => {
    const handler = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler); // Cleanup listener
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropDownRef}>
      <DropDownButton open={open} toggle={toggleDropDown} ref={buttonRef}>
        {buttonText}
      </DropDownButton>
      <DropDownContent open={open} ref={contentRef} >
        {content}
      </DropDownContent>
    </div>
  );
};

export default DropDown;
