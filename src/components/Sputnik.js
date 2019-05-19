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

    componentDidMount() {
        const marker = window.document.getElementsByClassName('marker');
        console.log(marker);
    }

    render() {
        const {width, height, viewBox, typeSputnik} = this.props;
        const {defaultOffsetX, defaultOffsetY} = this.state;
        let randomDuration, path, tmp;
        switch (typeSputnik) {
            case "NATURAL":
                randomDuration = Math.round((Math.random() * 100 + 100) / 10);
                path = 'M 550 400 a 900,900 0 1,0 1,0';
                tmp = 'natural';
                break;
            case "ARTIFICIAL":
                randomDuration = Math.round((Math.random() * 100) / 10);
                path = 'M 550 400 a 600,600 0 1,0 1,0';
                tmp = 'artificial';
                break;
            default:
                randomDuration = Math.round((Math.random() * 100) / 10);
                path = 'M 550 400 a 600,600 0 1,0 1,0';
                tmp = 'artificial';
        }
        const className = 'marker ' + tmp;
        return (
            <svg width={width} height={height}
                 viewBox={[viewBox[0] + defaultOffsetX, viewBox[1] + defaultOffsetY, viewBox[2] - 100, viewBox[3] + 700]}>

                <path d={path} stroke="white"
                      strokeWidth="1px" strokeDasharray="3" fill={"none"}/>
                <g className={className} style={{animationDuration: randomDuration + 's'}}>
                    {this.props.children}
                </g>

            </svg>
        );
    }
}

export default Sputnik;