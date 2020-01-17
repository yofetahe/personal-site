import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        <div className="FooterContent">
            &copy; {(new Date().getFullYear())} Yofetahe H. <br/> All rights reserved.
        </div>
    );
}

export default Footer;