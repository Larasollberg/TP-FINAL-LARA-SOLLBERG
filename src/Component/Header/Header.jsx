import React from 'react';



function Header() {
    return (
    <header className="main-header"> 
        <div className="header-content">
        <h1 className="app-title">WhatsApp</h1>
        <nav className="main-nav">
        <ul>
            <li><a href="/" className="nav-link">Chats</a></li>
            <li><a href="/contactos" className="nav-link">Contactos</a></li>
            
        </ul>
        </nav>
        </div>
    </header>
    );
}

export default Header;