
import { Navigation , Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import styles from './SwiperOwn.module.scss';
// import imgs
import beauty from '../../assets/images/beauty.avif';
import toys from '../../assets/images/toys.avif';
import books from '../../assets/images/books.avif';
import gamers from '../../assets/images/gamers.avif';
const SwiperOwn = () => {
  return (
    <Swiper
    modules={[Navigation , Autoplay]}
    spaceBetween={0}
    navigation
    speed={500}
    slidesPerView={1}
    loop
    className={styles.swiper}
    autoplay={{ 
      delay: 3000,  
      disableOnInteraction: false
    }}
  >
    <SwiperSlide className={styles.slideSwiper}>
      <img src={toys} alt="" />
    </SwiperSlide>
    <SwiperSlide className={styles.slideSwiper}>
      <img src={gamers} alt="" />
    </SwiperSlide>
    <SwiperSlide className={styles.slideSwiper}>
      <img src={books} alt="" />
    </SwiperSlide>
    <SwiperSlide className={styles.slideSwiper}>
      <img src={beauty} alt="" />
    </SwiperSlide>
  </Swiper>
  )
}

export default SwiperOwn;