import React from 'react';
import styles from './ListaReceitas.module.css';
import {Link} from 'react-router-dom';


function Lreceitas({doces}) {

 console.log(doces)
  return (
  <div className={styles.Root}>
    <Link to={doces.url}>
    <div className={styles.Conteudo}>
      <img className={styles.Img} src= {doces.imagem} alt="foto alimento" />
      <div className={styles.Descricao}>
        <p className={styles.TitleP}>{doces.titulo}</p>
        <div className={styles.Informations}>
          <div className={styles.Time}>
            <img className={styles.IconTime} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/icons/relogio.png?raw=true" alt="" />
            <p className={styles.TextTime}>{doces.tempo}</p>
          <img className={styles.IconHeart} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/icons/gostar.png?raw=true" alt="" />
          </div>
        </div>
      </div>
    </div>
    </Link>
  </div>
   
   
 )
}

export default Lreceitas;