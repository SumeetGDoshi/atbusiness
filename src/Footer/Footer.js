import React from 'react';
import './Footer.css';
import FooterLogo from '../assets/footer-logo.png';

function Footer(){
    return(
        <div className="footer">
            <div className="footer-left-block">
                <div className="footer-menu-item">
                    <div className="f-text-c">
                        <span>who</span> <span> are we?</span>
                    </div>
                </div>
                <div className="footer-menu-item">
                    <div className="f-text-c">
                    <span>what do</span> <span>we do?</span>
                    </div>
                </div>
                <div className="footer-menu-item">
                    <div className="f-text-c">
                        <span>how do</span>< span> we do it?</span>
                    </div>
                </div>
                <div className="footer-menu-item">
                    <div className="f-text-c">
                        <span>what is </span> <span>at social?</span>
                    </div>
                </div>
                <div className="footer-menu-item">
                    <div className="f-text-c">
                        <span>our</span> <span>services</span>
                    </div>
                </div>

                <div className="footer-menu-item">
                    <div className="f-text-c">
                        <span>have us</span> <span>reach you</span>
                    </div>
                </div>
            </div>
            <div className="footer-right-block">
                <div className="footer-logo">
                    <img src={FooterLogo} width={130} />
                </div>
                <div className="footer-right-info">
                    <div className="footer-info-holder">
                        <p>info@at.business</p>
                        <p>U.S: +1 (315) 819 2292 </p>
                        <p>India: +91 9833441263</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;