
import { Link } from "react-router-dom";
import styles from "./Basket.module.scss";
import basket from '../../../assets/images/basket.avif';

const Basket = ({ initialCart }) => {
  return (
    <Link to="/cart">
      <div className={styles.containerBasket}>
        <div className={styles.basketNumber}>
          <span>{initialCart.length}</span>
          <div className={styles.basketImg}>
            <img src={basket} alt="Basket" />
          </div>
        </div>
        <p>Cart</p>
      </div>
    </Link>
  );
};

export default Basket;
