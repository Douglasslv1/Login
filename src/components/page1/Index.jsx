import React from 'react';
import Style from './Stle.module.css'; 
import Logo from '../img/semfundochapeu.png'; 

const Page1 = () => {
  return (
    <>
      <div className={Style.NavMenu}>
        <img src={Logo} alt="Logo" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/outra-pagina">Outra Página</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </div>
    </>
  );
};

export default Page1;
