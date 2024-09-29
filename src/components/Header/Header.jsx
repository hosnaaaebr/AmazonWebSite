import { useState } from 'react';
import styles from './Header.module.scss';

import CurrentLocation from './CurrentLocation/CurrentLocation';
import DropDown from '../DropDown/DropDown';
import DropDownItem from '../DropDown/DropDownItem/DropDownItem';
import OptionSelected from '../OptionSelected/OptionSelected';
import Language from './Language/Language';
import SignIn from './SignIn/SignIn';
import { FaSearch } from "react-icons/fa";
import amazonLogo from "../../assets/images/amazonlogo.avif";
import Basket from './Basket/Basket';
const Header = ({ cart }) => {
  const [changeOption, setChangeOption] = useState("");
  const [itemClicked, setItemClicked] = useState(false);
  const items = ["All", "Mobiles", "Laptop", "Mobile Accessories"];

  const toggleDropDown = (e) => {
    const selectedItem = e.target.textContent;
    setChangeOption(selectedItem);
    setItemClicked(true);
  };

  const inputClick = () => {
    setItemClicked(true);
  };

  const handleFeedback = () => {
    setItemClicked(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={amazonLogo} alt="" className={styles.amazonLogo} />
      </div>
      <div className={styles.location}>
        <CurrentLocation />
      </div>
      <div className={styles.formContainer}>
      <form
        className={styles.searching}
        style={itemClicked ? { borderColor: 'rgb(255, 96, 22)' } : null}
      >
        <DropDown
          buttonText={changeOption !== "" ? changeOption : "All"}
          content={
            <>
              {items.map((item) => (
                <DropDownItem key={item} onClick={toggleDropDown}>
                  {item}
                </DropDownItem>
              ))}
            </>
          }
        />
        <input
          type="text"
          placeholder="Search Amazon"
          className={styles.inputStyle}
          onClick={inputClick}
        />
        <div className={styles.iconContainer}>
          <FaSearch className={styles.searchIcon} />
        </div>
      </form>
      </div>
      

      {itemClicked && (
        <OptionSelected onClick={handleFeedback} />
      )}
      <Language />
      <SignIn/>
      <div className={styles.returns}><p>Returns</p> <h4>& Orders</h4></div>
      <Basket initialCart={cart}/>
    </div>
  );
};

export default Header;
