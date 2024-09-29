import styles from './Footer.module.scss';
import { useState , useEffect} from 'react';
import amazonLogo from '../../assets/images/amazonLogo.avif';
import internet from '../../assets/images/internet.avif';
import usa from '../../assets/images/usa.avif';
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
    {isVisible && <div className={styles.backToTop} onClick={scrollToTop}>
      <p>Back to Top</p></div>}
      <div>
      <div className={styles.container}>
        <div><p>Get to Know Us</p>
        <ul>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Amazon</li>
          <li>Investor Relations</li>
          <li>Amazon Devices</li>
          <li>Amazon Science</li>
        </ul></div>
        <div><p>Make Money with Us</p>
        <ul>
          <li>Sell products on Amazon</li>
          <li>Sell on Amazon Business</li>
          <li>Sell apps on Amazon</li>
          <li>Become an Affiliate</li>
          <li>Advertise Your Products</li>
          <li>Self-Publish with Us</li>
          <li>Host an Amazon Hubs</li>
          <li>See More Make Money with Us</li>
        </ul>
        </div>
        <div><p>Amazon Payment Products</p>
        <ul>
          <li>Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Reload Your Balance</li>
          <li>Amazon Currency Converter</li>
        </ul></div>
        <div><p>Let Us Help You</p>
        <ul>
          <li>Amazon and COVID-19</li>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Shipping Rates & Policies</li>
          <li>Returns & Replacements</li>
          <li>Manage Your Content and Devices</li>
          <li>Amazon Assistant</li>
          <li>Help</li>
        </ul>
      </div>
      
    </div>
    <hr style={{ height: "1px" }} />
    <div className={styles.label}>
      <div className={styles.footerContain}>
      <div className={styles.imgFooter}>
          <img src={amazonLogo} alt="" />
      </div>
      <div className={styles.buttons}>
        <div className={styles.btnFooter}>
          <div>
            <img src={internet} alt="" />
          </div>
            <div>English</div>
        </div>
        <div className={styles.btnFooter}><span>$</span>USD - U.s Dollor</div>
        <div className={styles.btnFooter}>
          <div>
            <img src={usa} alt="" />
          </div>
          <div>United State</div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
    
  )
}

export default Footer;