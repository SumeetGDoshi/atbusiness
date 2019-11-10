import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import BannerImage from '../../assets/banner_img.jpg';
import ArrowLeft from '../../assets/arrow-left.png';
import ArrowRight from '../../assets/arrow-right.png';
import './Carousel.css';

class Carousel extends Component{
    render(){
        return (
            <div className="carousel-block">
                <div className="carousel-previous" onClick={() => this.Carousel.slidePrev()}>
                    <img src={ ArrowLeft } alt="arrow-left" />
                </div>
                <div className="carousel-wrapper">
                    <AliceCarousel
                    dotsDisabled={true}
                    buttonsDisabled={true}
                    ref={ el => { console.log(el); this.Carousel = el} }
                    >
                        <img src={ BannerImage } className="slider-image" />
                        <img src={ BannerImage } className="slider-image" />
                        <img src={ BannerImage } className="slider-image" />
                    </AliceCarousel>
                </div>
                <div className="carousel-previous" onClick={() => this.Carousel.slideNext()}>
                    <img src={ ArrowRight } alt="arrow-right" />
                </div>
            </div>
        )
    }
}

export default Carousel;