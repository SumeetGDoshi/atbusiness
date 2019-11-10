import React from 'react';
import BigMobileBanner from '../../../assets/mobile-illustration.png' 
import './Banner.styles.css';

function MobileBanner(props){
    return (
        <div className="banner-container2">
             <div className='banner-big'>
                <img width={'245px'} height={'665px'} alt='mobile banner' src={BigMobileBanner}/>
            </div>
            <div className="banner-container1">
            <img width={props.width} height={props.height} alt="Image" src={props.image} onClick={props.clicked} style={{cursor:"pointer"}}/>
            </div>
        </div>
    )
}

export default MobileBanner;