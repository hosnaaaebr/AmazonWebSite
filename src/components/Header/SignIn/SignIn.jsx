
import { useState } from 'react';
import SignInDropDown from "./SignInDropDown/SignInDropDown";
import { IoMdArrowDropdown } from 'react-icons/io';
import styles from './SignIn.module.scss';

const SignIn = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => setDropdownVisible(true);
  const handleMouseLeave = () => setDropdownVisible(false);

  return (
    <div className={styles.signInContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles.makingAccount}>
        <span>Hello, sign in</span>
        <span className={styles.accountList}>
          <strong>Account & Lists</strong>
          <div><IoMdArrowDropdown /></div>
        </span>
      </div>
      {isDropdownVisible && <SignInDropDown />}
    </div>
  );
};

export default SignIn;
