import React, { PureComponent } from 'react';
import sputnik from '../icons/sputnik.svg';
import '../styles/Sputnik.css';

const defaultWidth = 700;
const defaultHeight = 700;
const defaultOffsetX = window.innerWidth / 2 - defaultWidth / 2;
const defaultOffsetY = window.innerHeight / 2 - defaultHeight / 2;


class Sputnik extends PureComponent {

    constructor(props){
        super(props);
        const xRandom = Math.round((Math.random() - 0.5) * 100);
        const yRandom = Math.round((Math.random() - 0.5) * 100);
        console.warn({xRandom, yRandom});
        this.state = {
            width: defaultWidth,
            height: defaultHeight,
            offsetX: defaultOffsetX + xRandom,
            offsetY: defaultOffsetY + yRandom
        }
    }

    /*componentDidMount() {
        const { width, height, offsetX, offsetY } = this.state;
        const modal = window.document.querySelector(".modal");

        modal.setAttribute("width", width + "px");
        modal.setAttribute("height", height + "px");
        modal.setAttribute("left", offsetX  + "px");
        modal.setAttribute("top", offsetY + "px");
    }*/



    render() {
        const { width, height, offsetX, offsetY } = this.state;

        return (
                <div className="modal" style={{"left": offsetX, "top": offsetY}}>
                    <svg width={width} height={height} viewBox={"0 0 "+ width + " " + height}>
                        <circle cx={width / 2 + "px"} cy={width / 2 + "px"} r={width / 2} stroke="white"
                                strokeWidth="1px" strokeDasharray="3" fill={"none"}/>
                    </svg>
                    <svg viewBox="0,0 10,10" width="200px" height="200px">

                        <path
                            className="track"
                            fill="none"
                            stroke-width="0.25"
                            d="M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0"
                        />

                        <img src={sputnik} alt={'спутник'} className="marker"/>
                        <circle className="marker" r="1" fill="orange"></circle>

                    </svg>
                    <div className={'mover'}>
                        <img src={sputnik} alt={'спутник'}/>
                    </div>
                </div>

        );
    }
}

export default Sputnik;