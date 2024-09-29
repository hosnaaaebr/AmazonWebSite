import { useParams } from 'react-router-dom';
import products from '../dataProducts.json';
import styles from './Product.module.scss';
// imgs
import drive from '../assets/images/drive.avif';
import coment from '../assets/images/coment.avif';
import circle from '../assets/images/circle.avif';
// icons
import { IoLocationOutline } from "react-icons/io5";
// files
import DropDown from '../components/DropDown/DropDown';
import DropDownItem from '../components/DropDown/DropDownItem/DropDownItem';
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from 'react';
const Product = ({cart , addToCart}) => {
  const { id } = useParams();

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id));
  const isInCart = cart.find((item) => item.id === product.id);
  const [name ,setName] = useState("");
  const [seeMore, setSeeMore] = useState(false);
  const [changeOption, setChangeOption] = useState("");
  

  const cartHandler = () => {
    addToCart(product);
  };
  const items = ["Quantity 1", "Quantity 2", "Quantity 3", "Quantity 4","Quantity 5","Quantity 6","Quantity 7","Quantity 8","Quantity 9"];
   const nameHandler = (e) => {
    const targetName = e.currentTarget.querySelector('p').textContent;
    setName(targetName);
   }
   const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };
  const toggleDropDown = (e) => {
    const selectedItem = e.target.textContent;
    setChangeOption(selectedItem);
  };

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.driving}>
          <img src={drive} alt="" />
      </div>
      <div className={styles.contentCon}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.title} className={styles.image} />
        </div>
        <div className={styles.contentContainer}>
          <h1 style={{ fontSize: "40px", fontWeight:"inherit" }}>{product.title}</h1>
          <p style={{ fontSize: "24px", width: "640px", color: "black", fontWeight:"inherit" }}>
            {product.content}
          </p>
          <p className={styles.hoverEffect} style={{ cursor: "pointer" }}>
            Visit the {product.title} store
          </p>
          <div>
            <div style={{ display: "flex", gap: "8px" }}>
              <p>4.3</p>
              <div className={styles.starContainer}>
                {Array(5).fill().map((_, index) => (
                  <img src={product.star} alt="star" key={index} />
                ))}
              </div>
              <div style={{ display: "flex", gap: "2px" }}>
                <div>
                  <p className={styles.hoverEffect} style={{ cursor: "pointer" }}>
                    {product.rate} ratings
                  </p>
                </div>
                <span style={{ color: "#e5e7eb" }}>|</span>
                <div>
                  <p className={styles.hoverEffect} style={{ cursor: "pointer" }} >
                    Search this page
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p style={{ lineHeight: "16px", fontSize: "12px" ,marginTop:"4px" }}>
              6K+ bought in past month
            </p>
          </div>
          <hr style={{ height: "3px", marginTop: "8px" }} />
          <div style={{display:"flex", gap:"5px"}}>
            <div>
              <p style={{color:"rgb(239 68 68)", fontWeight:300,fontSize:"24px"}}>-7%</p>
            </div>
            <div className={styles.priceContainer}>
            <p style={{paddingBottom: "7px" ,fontSize:"15px"}}>{product.currency}</p>
              <p style={{ fontSize: "25px", fontWeight: "700" }}>{product.sale}</p>
              <p style={{ paddingBottom: "7px" }}>{product.decimental}</p>
            </div>
          </div>
          <p style={{fontSize:"12px" , color:'#565959'}}>List Price:<span style={{textDecoration:"line-through"}}>$321.99</span></p>
          <div style={{display:"flex" , gap:"5px" }}>
            <p style={{fontSize:"14px"}}>$91.31 Shipping & Import Fees Deposit to United States</p>
            <div className={styles.detailDrop} style={{fontSize:"14px", cursor:"pointer"}}>Detail<IoMdArrowDropdown /></div>
          </div>
          <p style={{fontSize:"14px"}}>Available at a lower price from <span className={styles.hoverEffect} style={{cursor:"pointer"}}>other sellers</span> that may not offer free Prime shipping.</p>
          <div className={styles}style={{display:"flex" ,fontSize:"14px" , gap:"4px" ,cursor:'pointer'}}>
            <div className={styles.saving}>Extra Savings</div>
            <p className={styles.hoverEffective}>Amazon Music offer with this purchase 1 Applicable Promotion <IoMdArrowDropdown /></p>
          </div>
          <div>
            <p style={{fontSize:"14px"}}>Style:
              <span style={{fontWeight:"700"}}>  {name ==="" ? "R3 7320U" : name}</span>
            </p>
          </div>
          <div style={{display:"flex", gap: "5px"}}>
            <div style={{padding: "8px"}}>
              <button className={styles.btn} onClick={nameHandler}>
                <p style={{fontSize:"14px"}}>R3 7320U</p>
                <p style={{fontSize:"12px" , color: "rgb(124, 0, 0)"}}> $299.99</p>
              </button>
            </div>
            <div style={{padding: "8px"}}>
              <button className={styles.btn} onClick={nameHandler}>
                <p style={{fontSize:"14px"}}>R7 5700U</p>
                <p  style={{fontSize:"12px" , color: "rgb(124, 0, 0)"}}>$499.99</p>
              </button>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: "1.6rem", width: "50%" }}>
              <div style={{ display: 'flex', fontSize: "14px", fontWeight: "700", flexDirection: "column", gap: "1.6rem" }}>
                <p>Brand</p>
                <p>Model Name</p>
                <p>Screen Size</p>
                <p>Color</p>
                <p>Hard Disk Size</p>
                <p>CPU Model</p>
                <p>Ram Memory Installed Size</p>
                {seeMore && (
                  <>
                    <p>Operating System</p>
                    <p>Special Feature</p>
                    <p>Graphics Card Description</p>
                  </>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem", fontSize: "14px" }}>
                <p>acer</p>
                <p>Laptop</p>
                <p>15.6 Inches</p>
                <p>Silver</p>
                <p>128 GB</p>
                <p>Ryzen 3</p>
                <p>8 GB</p>
                {seeMore && (
                  <>
                    <p>Windows 11 S</p>
                    <p>Backlit Keyboard</p>
                    <p>Integrated</p>
                  </>
                )}
              </div>
            </div>
            <div className={styles.seeMore} style={{ marginTop: "1rem" }}>
              <button onClick={toggleSeeMore} style={{ display: "flex", alignItems: "center" }}>
              <IoMdArrowDropdown style={{ paddingTop: "3px", fontSize: "15px" }} />
              {seeMore ? "See less" : "See more"}
              </button>
            </div>
          </div>
          <hr style={{ height: "3px", marginTop: "8px" }} />
          <div style={{padding:"8px" ,maxWidth:"670px",marginTop:"8px"}}>
            <p style={{fontSize:"16px" , fontWeight:"700"}}>About Item</p>
            <ol className={styles.olList}>
              <li>Purposeful Design: Travel with ease and look great doing it with the Aspire's 3 thin, light design.</li>
              <li>Ready-to-Go Performance: The Aspire 3 is ready-to-go with the latest AMD Ryzen 3 7320U Processor with Radeon Graphics—ideal for the entire family, with performance and productivity at the core.</li>
              <li>Visibly Stunning: Experience sharp details and crisp colors on the 15.6" Full HD IPS display with 16:9 aspect ratio and narrow bezels.</li>
              <li>Internal Specifications: 8GB LPDDR5 Onboard Memory; 128GB NVMe solid-state drive storage to store your files and media</li>
              <li>The HD front-facing camera uses Acer’s TNR (Temporal Noise Reduction) technology for high-quality imagery in low-light conditions. Acer PurifiedVoice technology with AI Noise Reduction filters out any extra sound for clear communication over online meetings.</li>
              <li>Wireless Wi-Fi 6 Convenience: Maintain a strong, consistent wireless signal with Wi-Fi 6 (aka 802.11ax) and 2x2 MU-MIMO technology.</li>
              <li>Improved Thermals: With a 78% increase in fan surface area, enjoy an improved thermal system and an additional 17% thermal capacity. Allowing for longer, more efficient work sessions while not plugged in.</li>
              {seeMore && (
                  <>
                    <li>Ports For All Your Accessories: 1 - USB Type-C Port USB 3.2 Gen 2 (up to 10 Gbps) DisplayPort over USB Type-C & USB Charging, 2 - USB 3.2 Gen 1 Ports, 1 - HDMI 2.1 Port with HDCP support, 1 - Headphone/Speaker/Line-Out Jack, DC-in for AC adapter</li>
                    <li>What's In the Box: Acer Aspire Laptop, AC Adapter, Power Cord</li>
                    <li>Keyboard backlight not present on this model</li>
                  </>
                )}
             
            </ol>
            <div className={styles.seeMore} style={{ marginTop: "1rem" }}>
              <button onClick={toggleSeeMore} style={{ display: "flex", alignItems: "center" }}>
              <IoMdArrowDropdown style={{ paddingTop: "3px", fontSize: "15px" }} />
              {seeMore ? "See less" : "See more"}
              </button>
            </div>
          </div>
          <div>
            <div style={{display:"flex" ,alignItems:"center",gap:"8px"}}>
              <div>
                <img src={coment} style={{width:"25px" , height:"25px"}} />
              </div>
              <p className={styles.hoverEffect} style={{color:"rgb(0 113 133)" ,fontSize:"14px", cursor:"pointer"}}>Report an issue with this product or seller</p>
            </div>
            <div>
              <p style={{ lineHeight: "20px",color: "rgb(15 17 17)",fontSize: "14px",maxWidth:"670px" }}><span style={{fontWeight:"800"}}>Note:</span> Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.</p>
            </div>
          </div>
          <hr style={{ height: "3px", marginTop: "8px" }} />
        </div>
        <div>
          <div className={styles.buyNow}>
            <div style={{display:"flex",gap:"100px"}}>
              <p>Buy New:</p>
              <img src={circle} alt="" />
            </div> 
            <div style={{display:"flex",justifyContent:"flex-start" ,marginBottom:"32px"}}>
              <div className={styles.priceContainer}>
                <p style={{paddingBottom: "7px" ,fontSize:"15px"}}>{product.currency}</p>
                <p style={{ fontSize: "25px", fontWeight: "700" }}>{product.sale}</p>
                <p style={{ paddingBottom: "7px" }}>{product.decimental}</p>
              </div>
            </div>         
            <p style={{width:"200px", color:"rgb(86 89 89)",fontSize:"14px"}}>$91.31 Shipping & Import Fees Deposit to United States Details Delivery
              <span style={{fontWeight: "700" , color:"black"}}> Wednesday, May 15</span>
            </p>
            <div  style={{display:"flex", gap:"4px" , marginTop:"12px" , marginBottom:"12px"}}>
              <IoLocationOutline />
              <p style={{fontSize:"12px"}} className={styles.hoverEffect}>Deliver to UnKnown</p>
            </div>
            <p style={{color: "rgb(0 118 0)",fontSize:"18px"}}>In Stock</p>
            <DropDown 
              buttonText={changeOption !== "" ? changeOption : "Quantity 1"}
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

            <button className={styles.addCartBtn} onClick={cartHandler}>
            {isInCart ? <p>Remove from cart</p> : <p>Add to cart</p>}
            </button>
            <div className={styles.shipping}>
              <div>
                <div className={styles.table}>
                  <p>Ships from</p>
                  <p style={{width:"70px"}}>Amazon.com</p>
                </div>
                <div className={styles.table}>
                  <p>Sold by</p>
                  <p style={{width:"70px"}}>Amazon.com</p>
                </div>
                <div className={styles.table}>
                  <p>Returns</p>
                  <p className={styles.hoverEffects} style={{width:"70px"}}>Eligible for Return, Refund or Replacement within 30 days of receipt</p>
                </div>
                <div className={styles.table}>
                  <p>Payments</p>
                  <p style={{width:"70px"}} className={styles.hoverEffects}>Secure transaction</p>
                </div>
                {seeMore && (
                  <>
                    <div className={styles.table}>
                      <p>Support</p>
                      <p style={{width:"70px"}} className={styles.hoverEffects}>Product support included</p>
                    </div>
                  </>
                )}
                
              </div>
              <div className={styles.seeMore} style={{ marginTop: "1rem" }}>
                <button onClick={toggleSeeMore} style={{ display: "flex", alignItems: "center" }}>
                <IoMdArrowDropdown style={{ paddingTop: "3px", fontSize: "15px" }} />
                  {seeMore ? "See less" : "See more"}
                </button>
              </div> 
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Product;
