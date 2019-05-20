import React, {PureComponent} from 'react';
import '../styles/Sputnik.css';


class Sputnik extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            defaultOffsetX: Math.round(Math.random() * 300 - 150),
            defaultOffsetY: Math.round(Math.random() * 300 + 100)
        }
    }

    render() {
        const {width, height, viewBox, typeSputnik, v} = this.props;
        const {defaultOffsetX, defaultOffsetY} = this.state;
        let duration, path, tmp;
        switch (typeSputnik) {
            case "NATURAL":
                duration = -v + 15;
                path = 'M 550 400 a 900,900 0 1,0 1,0';
                tmp = 'natural';
                break;
            case "ARTIFICIAL":
                duration = -v + 25;
                path = 'M 550 400 a 600,600 0 1,0 1,0';
                tmp = 'artificial';
                break;
            default:
                duration = -v + 25;
                path = 'M 550 400 a 600,600 0 1,0 1,0';
                tmp = 'artificial';
        }
        const className = 'marker ' + tmp;
        return (
            <svg width={width} height={height}
                 viewBox={[viewBox[0] + defaultOffsetX, viewBox[1] + defaultOffsetY, viewBox[2] - 100, viewBox[3] + 700]}>

                <path d={path} stroke="white"
                      strokeWidth="1px" strokeDasharray="3" fill={"none"}/>
                <g className={className} style={{animationDuration: duration + 's'}}>
                    {this.props.children}
                </g>

            </svg>
        );
    }
}

export default Sputnik;