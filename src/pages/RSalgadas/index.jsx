import React from 'react'
import styles from './RSalgada.module.css'
import Header from '../../components/header/index'
import Footer from '../../components/Footer/index'
import {Link} from 'react-router-dom'



function RSalgada() {

  return (
    <>
    <Header/>
  <div className={styles.Root}>
    <div className={styles.Voltar}><Link to='/'><img className={styles.Seta} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/icons/seta-esquerda.png?raw=true" alt="" /> Voltar</Link></div>
    <div className={styles.imagens}>
      <div className={styles.Img1}><Link to='/ReceitasSalgadas'><img className={styles.Img} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/salgadopratico.png?raw=true" alt="" /><button className={styles.Botao}>Práticas</button></Link></div>
      <div className={styles.Img2}><Link to='/ReceitasSalgadas'><img className={styles.Img} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/salgadoveg.png?raw=true" alt="" /><button className={styles.Botao}>Vegetárianas</button></Link></div>
    </div>
    <div className={styles.imagens}>
      <div className={styles.Img3}><Link to='/ReceitasSalgadas'><img className={styles.Img} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/salgadoquente.png?raw=true" alt="" /><button className={styles.Botao}>Quentes</button></Link></div>
      <div className={styles.Img4}><Link to='/ReceitasSalgadas'><img className={styles.Img} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/salgadofrio.png?raw=true" alt="" /><button className={styles.Botao}>Frias</button></Link></div>
    </div>
  </div>
   <Footer/>
  </>
 )
}

export default RSalgada