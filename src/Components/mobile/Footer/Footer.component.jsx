import React from 'react';
import './Footer.styles.css';
import FooterLogo from '../../../assets/footer-logo.png';

function MobileFooter(){
    return(
        <div className="footer1">
            <div className="footer-block1">
            <div className="footer-info1">
                <div className="footer-logo2">
                    <img src={FooterLogo} width={130} />
                </div>
                <div className="footer-info-holder1">
                        <p>info@at.business</p>
                        <p>U.S: +1 (315) 819 2292 </p>
                        <p>India: +91 9833441263 </p>
            </div>
                </div>
            </div>
        </div>
    )
}

export default MobileFooter;