import React from 'react';
import '../assets/styles/components/Header.scss'

const Header = () => (
    <header className="header">
        <img className="header__img" src="./logo-platzi-video-BW2.png" alt="nodejs"></img>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="./icons8-usuario-masculino-en-círculo-50.png" alt="user"></img>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
);

export default Header;