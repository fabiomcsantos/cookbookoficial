import React, {useEffect, useState, useRef} from 'react';
import styles from './home.module.css';
import Header from '../../components/header/index';
import Footer from '../../components/Footer/index';
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide } from 'swiper/react'




function Home() {

  const data = [
    {id: '1', image: 'https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/banner1.png?raw=true'},
    {id: '2', image: 'https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/banner2.png?raw=true'},
    {id: '3', image: 'https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/banner3.png?raw=true'},
  ]

  

  return (


    
    <div>
    <Header/>
    <div className={styles.Root}>
    <div className={styles.Banner}>
     <Swiper className={styles.swiper}
      slidesPerView={1}
      pagination={{clickable: true}}
      navigation
      
      style={{
        "--swiper-navigation-color": "#000",
        "--swiper-pagination-color": "#fff",
        "--swiper-pagination-width": "32px",
      }}
    >

      
      {data.map((item)=>(
        <SwiperSlide className={styles.Swiper} key={item.id}>
          <img src={item.image} alt="slider" />
      </SwiperSlide>
      ))}



     </Swiper>
    
    </div>
    <div className={styles.imagens}>
      <div className={styles.Img1}> <Link to="/RSalgadas"> <img className={styles.Img} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/salgado.png?raw=true" alt="" /><button className={styles.Botao}>Salgadas</button></Link></div>
      <div className={styles.Img2}> <Link to="RDoces"> <img className={styles.Img} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/doces.png?raw=true" alt="" /><button className={styles.Botao}>Doces</button></Link></div>
      <div className={styles.Img3}><Link to="RBebidas">  <img className={styles.Img} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/bebidas.png?raw=true" alt="" /><button className={styles.Botao}>Bebidas</button></Link></div>
    </div>
  </div>
    <Footer/>

    
  </div>
 )
}

export default Home