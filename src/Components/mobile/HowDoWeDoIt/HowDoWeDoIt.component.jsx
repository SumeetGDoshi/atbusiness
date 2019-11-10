import React from 'react';
import './HowDoWeDoIt.styles.css';

import block1 from '../../../assets/b1.png';
import block2 from '../../../assets/b2.png';
import block3 from '../../../assets/b3.png';
import block4 from '../../../assets/b4.png';


function MobileHowDoWeDoIt(){
    return (
        <div className="how-do-we-do-itM">
            <h1>so how would this work?</h1>
            <div className="blockM">
                <div className="small-blocksM1">
                    <img className="block-imgM1" src={block1} width={"53px"} height={"93px"} />
                    <p> Tell us all that your business currently needs</p>
                </div>

                <div className="small-blocksM">
                    <img className="block-imgM" src={block2} width={"63px"} height={"93px"} />
                    <p>We run you through services based on your industry.</p>
                </div>

                <div className="small-blocksM">
                    <img className="block-imgM" src={block3} width={"63px"} height={"96px"}/>
                    <p>We analyse 
                       your business to reduce costs.</p>
                </div>

                <div className="small-blocksM4">
                    <img className="block-imgM4" src={block4} width={"80px"} height={"88px"} />
                    <div className="block-text4">
                    <p>We then offer a free demo of the selected services</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MobileHowDoWeDoIt;