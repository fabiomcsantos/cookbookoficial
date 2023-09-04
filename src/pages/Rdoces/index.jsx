import React from 'react'
import styles from './RDoces.module.css'
import Header from '../../components/header/index'
import Footer from '../../components/Footer/index'
import { Link } from "react-router-dom";



function RDoces() {

  return (
    <>
    <Header/>
    <div className={styles.Root}>
    <div className={styles.Voltar}><Link to="/"><img className={styles.Seta} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/icons/seta-esquerda.png?raw=true" alt="" /> Voltar</Link></div>
    
    <div className={styles.imagens}>
      <div className={styles.Img1}><Link to="/ReceitasDoces"><img className={styles.Img} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/docepratico.png?raw=true" alt="" /><button className={styles.Botao}>Práticas</button></Link></div>
      <div className={styles.Img2}><Link to="/ReceitasDoces"><img className={styles.Img} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/doceveg.png?raw=true" alt="" /><button className={styles.Botao}>Vegetárianas</button></Link></div>
    </div>
    <div className={styles.imagens}>
      <div className={styles.Img3}><Link to="/ReceitasDoces"><img className={styles.Img} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/docequente.png?raw=true" alt="" /><button className={styles.Botao}>Quentes</button></Link></div>
      <div className={styles.Img4}><Link to="/ReceitasDoces"><img className={styles.Img} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/docefrio.png?raw=true" alt="" /><button className={styles.Botao}>Frias</button></Link></div>
    </div>
    
  </div>
  <Footer/>
   
  </>
 )
}

export default RDoces