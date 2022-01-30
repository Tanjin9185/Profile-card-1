import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p className="mb-0">Copyright © {new Date().getFullYear()} - Tanjin Ahamed All Rights Reserved</p>
        </div>
    );
};

export default Footer;