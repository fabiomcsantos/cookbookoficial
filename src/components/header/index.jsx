import React from 'react'
import styles from './header.module.css'
import {Link} from 'react-router-dom'

function Header() {

  return (
<div className={styles.Root}>
    <header className={styles.Header}>
    <Link to={"/"}><img className={styles.Logo} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/images/logo_cooking_sombra.png?raw=true" /> </Link>
      <div className={styles.Conteudo}>  
        <form className={styles.Form} name='search'>
          <input className={styles.Input} type='text' name='pesquisar' placeholder='pesquisar'/>
        </form>
        <Link to="/Rsalgadas"><button className={styles.Button}>Receitas Salgadas</button></Link>
        <Link to="/RDoces"><button className={styles.Button}>Receitas Doces</button></Link>
        <Link to="/Rbebidas"><button className={styles.Button}>Receitas Bebidas</button></Link>
      </div>
      <div className={styles.Links}>
        <Link to="/Login" className={styles.Login}><img className={styles.Icons} src="https://github.com/fabiomcsantos/cookbookoficial/blob/main/public/icons/user.png?raw=true" alt="" />login / cadastrar</Link>
      </div>
    </header>
  </div>
   )
  }


export default Header;