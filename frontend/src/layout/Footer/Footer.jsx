import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer section-space sidespace'>
            <div className='footer-main d-flex flex-column justify-content-center align-items-center gap-md-4 gap-3'>
                <NavLink to="/">
                    <img
                        className="hero-logo"
                        src="/assets/icons/logo.webp"
                        alt="My Logo"
                    />
                </NavLink>

                <div className='d-flex flex-column align-items-center gap-2'>
                    <p className="mb-0 text-md-start text-center">
                        Designed, developed, and delivered with ❤️ using React ⚛️ by Khan Zehan.
                    </p>

                    {/* Copyright Line */}
                    <p className="mb-0 text-center">
                        © {currentYear} Khan Zehan. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
