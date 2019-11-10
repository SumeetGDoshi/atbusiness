import React from 'react';
import './Banner.css';

function Banner(props){
    return (
        <div className="banner-container">
            <img width={props.width} height={props.height} alt="Image" src={props.image}/>
        </div>
    )
}

export default Banner;