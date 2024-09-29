import styles from './Home.module.scss';
import SwiperOwn from '../components/SwiperOwn/SwiperOwn';
import Products from '../components/Products/Products';

const Home = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.slider}>
          <SwiperOwn />
        </div>
        <div className={styles.main}>
          <div className={styles.header}>
            You are on amazon.com. You can also shop on Amazon United States for millions of products with fast local delivery. Click here to go to <a href="#">amazon.de</a>
          </div>
          <Products/>
        </div>
      </main>
    </>
  );
}

export default Home;
 