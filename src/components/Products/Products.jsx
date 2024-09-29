import { Link } from 'react-router-dom';
import products from '../../dataProducts.json';
import styles from './Products.module.scss';

const Products = () => {

  return (
    <>
      <div className={styles.products}>
        {products.map((product) => (
          <div className={styles.product} key={product.id}>
            <div>
              <div className={styles.imgContainer}>
                <img src={product.image} alt={product.title} className={styles.image} />
              </div>
            </div>
            <h2 style={{ fontSize: "30px", fontWeight: "inherit" }}>{product.title}</h2>
            <hr style={{ borderColor: 'rgb(203, 213, 225)', opacity: "1", borderWidth: "1px" }} />
            <div>
              <div className={styles.priceContainer}>
                <p style={{ marginTop: "7px" }}>{product.currency}</p>
                <p style={{ fontSize: "25px", fontWeight: "700" }}>{product.price}</p>
                <p style={{ marginTop: "7px" }}>{product.decimental}</p>
              </div>
              <p style={{ textDecorationLine: "line-through", fontSize: "13px", marginTop: "-3px", alignSelf: "flex-start" }}>{product.beforeSale}</p>
              <p style={{ fontSize: ".875rem", lineHeight: "1.25rem", marginTop: "12px", textAlign: 'justify' }}>{product.content}</p>
              <div className={styles.rate}>
                <div className={styles.starContainer}>
                  {Array(5).fill().map((_, index) => (
                    <img src={product.star} alt="star" key={index} />
                  ))}
                </div>
                <p style={{ fontSize: "12px", marginTop: "3px" }}>{product.rate}</p>
              </div>
              <Link to={`/product/${product.id}`}><p className={styles.hoverEffect} style={{ cursor: "pointer", marginTop: "10px" }}>
              See more ...</p></Link>
                
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
  