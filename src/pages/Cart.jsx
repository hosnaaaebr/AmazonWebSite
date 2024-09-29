import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import prime from '../assets/images/prime.avif';
import DropDown from '../components/DropDown/DropDown';
import DropDownItem from '../components/DropDown/DropDownItem/DropDownItem';

const Cart = ({ initialCart }) => {
  // Managing cart state locally for this example
  const [cart, setCart] = useState(initialCart);
  const [changeOption, setChangeOption] = useState("");

  const items = ["Quantity 1", "Quantity 2", "Quantity 3", "Quantity 4", "Quantity 5", "Quantity 6", "Quantity 7", "Quantity 8", "Quantity 9"];

  const toggleDropDown = (e) => {
    const selectedItem = e.target.textContent;
    setChangeOption(selectedItem);
  };

  // Handle item deletion
  const handleDelete = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    console.log( updatedCart)
    setCart(updatedCart);

  };

  return (
    <div>
      <div className={styles.container}>
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Conditional rendering for empty cart */}
          {cart.length === 0 ? (
            <div className={styles.emtyCart}>
              <p>Your Amazon Basket is empty.</p>
              <div style={{ display: "flex", gap: "5px" }}>
                <p>Check the products page for shopping.</p>
                <Link to="/" style={{ color: '#2e2aec', cursor: 'pointer' }} className={styles.aCon}>
                  Continue shopping
                </Link>
              </div>
            </div>
          ) : (
            <div className={styles.notEmty}>
              <h2 style={{ fontSize: "2.25rem", lineHeight: "2.5rem", fontWeight: "700" }}>Shopping Basket</h2>
              <p>Deselect all items</p>
              <hr style={{ height: "3px", marginTop: "8px" }}/>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <div className={styles.selectedProduct}>
                      <div>
                        <img src={item.image} style={{ width: "200px", height: "150px", verticalAlign: "middle" }} alt={item.name} />
                      </div>
                      <div>
                        <p style={{ width: "640px", color: "#0f1111" }}>{item.description}</p>
                        <p style={{ color: "rgb(0 118 0)", fontSize: "18px", marginTop: "8px" }}>In Stock</p>
                        <div>
                          <div><img src={prime} style={{ width: "70px", marginTop: "10px" }} alt="Prime" /></div>
                          <div style={{ display: "flex", paddingTop: "8px", paddingBottom: "8px", gap: "8px" }}>
                            <input type="checkbox" />
                            <p style={{ fontSize: "14px" }}>This will be a gift</p>
                            <a className={styles.hoverEffects} style={{ fontSize: "14px", cursor:"pointer" }}>Learn more</a>
                          </div>
                          <div style={{ marginBottom: "15px" }}>
                            <p><span style={{ fontSize: "16px", fontWeight: "700" }}>Style Name:</span> {item.styleName}</p>
                            <p><span style={{ fontSize: "16px", fontWeight: "700" }}>Colour name:</span> {item.colorName}</p>
                          </div>
                          <div style={{ display: "flex", gap: "8px" }}>
                            <DropDown
                              buttonText={changeOption !== "" ? changeOption : "Quantity 1"}
                              content={
                                <>
                                  {items.map((quantityItem) => (
                                    <DropDownItem key={quantityItem} onClick={toggleDropDown}>
                                      {quantityItem}
                                    </DropDownItem>
                                  ))}
                                </>
                              }
                            />
                            <div className={styles.editing}>
                              {/* Delete item handler */}
                              <p onClick={() => handleDelete(item.id)} style={{ cursor: "pointer" }}>Delete</p> <span>|</span> 
                              <p>Save for later</p> <span>|</span> 
                              <p>See more like this</p> <span>|</span> 
                              <p>Share</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr style={{ height: "3px", marginTop: "8px" }}/>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
