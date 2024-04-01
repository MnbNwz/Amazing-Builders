import React from 'react';
import './Header.css'; // Import CSS file containing styles
import Common from '../../Assets/Common';
import logo from '../../Assets/logo.jpg';

function Header() {
    let { home, services, about, recentProjects, contact } = Common.header;
    return (
        <header >
            <div className="header-container">
                <div className="column transparent" />
                <div className="column transparent" />
                <img height={100} width={100} src={logo} alt="Logo" />

                <div className="column">{home}</div>
                <div className="column">{services}</div>
                <div className="column">{about}</div>
                <div className="column">{recentProjects}</div>
                <div className="column">{contact}</div>

                <div className="column transparent" />
                <div className="column transparent" />
            </div>
        </header>
    );
}

export default Header;
