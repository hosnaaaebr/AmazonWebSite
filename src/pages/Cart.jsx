
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import prime from '../assets/images/prime.avif';
import DropDown from '../components/DropDown/DropDown';
import DropDownItem from '../components/DropDown/DropDownItem/DropDownItem';

const Cart = ({ initialCart, updateCart }) => {
  const [cart, setCart] = useState(initialCart);
  const [changeOption, setChangeOption] = useState("");
  const [sum, setSum] = useState(0);
  const items = ["Quantity 1", "Quantity 2", "Quantity 3", "Quantity 4", "Quantity 5", "Quantity 6", "Quantity 7", "Quantity 8", "Quantity 9"];

  const toggleDropDown = (e) => {
    const selectedItem = e.target.textContent;
    setChangeOption(selectedItem);
  };
// delete one item
  const handleDelete = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    updateCart(updatedCart); // Update the cart in the App component
  };
  // delete all
  const deleteAllHandler = () => {
   setCart([]);
   updateCart([]);
  }
  useEffect(() => {
    setSum(sumUp());
  }, [cart]);

  const sumUp = () => {
    const total = cart.reduce((accumulator, item) => {
      return accumulator + parseFloat(item.sale);
    }, 0);
    return total;
  };
  
  return (
    <div style={{width:"100%"}}>
       <div className={styles.container}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', width:"100%"}}>
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
        <>
             <div className={styles.notEmty}>
               <h2 style={{ fontSize: "2.25rem", lineHeight: "2.5rem", fontWeight: "700" }}>Shopping Basket</h2>
               <p style={{cursor:"pointer"}} className={styles.hoverEffects} onClick={deleteAllHandler}>Deselect all items</p>
               <hr style={{ height: "3px", marginTop: "8px" }}/>
               <ul>
                 {cart.map((item) => (
                  <>
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
                             <p><span style={{ fontSize: "16px", fontWeight: "700" }}>Style Name:</span> 0.5 litre work container</p>
                             <p><span style={{ fontSize: "16px", fontWeight: "700" }}>Colour name:</span> white </p>
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
                               <p onClick={() => handleDelete(item.id)} style={{ cursor: "pointer" }}>Delete</p> <span>|</span> 
                               <p>Save for later</p> <span>|</span> 
                               <p>See more like this</p> <span>|</span> 
                               <p>Share</p>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div style={{fontWeight:"bold", fontSize:"20px"}}>
                        ${item.sale}
                       </div>
                     </div>
                     <hr style={{ height: "3px", marginTop: "8px" }}/>
                   </li>
                   
                   </>
                 ))}
               </ul>
               <p style={{alignSelf:"flex-end", display:"flex"} }>
                 <p>SubTotal ({cart.length} item): </p> 
                 <p style={{fontWeight:"bold", fontSize:"20px"}}> ${sum}</p>
               </p>
             </div>
             
             </>
           )}
         </div>
         {cart.length === 0 ? null : <div className={styles.subTotal}>
          <div>
            <p style={{display:"flex" , flexDirection:"column" , gap:"10px" }}>
              SubTotal ({cart.length} item):<p style={{fontWeight:"bold" , fontSize:"20px"}}> ${sum}
                </p>
            </p>
          </div>
            <div style={{ display: "flex", gap: "3px", whiteSpace: "nowrap" }}>
              <input type="checkbox" style={{fontSize:"0.8em"}} />
              <p style={{ fontSize: "0.7rem" }}>This will be a gift</p>
              <a className={styles.hoverEffects} style={{ fontSize: "0.8rem", cursor: "pointer" }}>Learn more</a>
            </div>
            <button className={styles.addCartBtn} >
              Proceed to Checkout
            </button>
          </div>}
       </div>
     
     </div>
  );
};

export default Cart;
