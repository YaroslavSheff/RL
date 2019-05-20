import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Earth from './icons/earth.svg'
import Sputnik from "./components/Sputnik";
import Moon from "./components/Moon";
import WrapperSputnik from "./components/WrapperSputnik";
import Rocket from "./components/Rocket";
import ControlLayout from "./components/ControlLayout";

import './styles/App.css';

const iW = window.innerWidth;
const iH = window.innerHeight;
const iWp = Math.round(iW / 100);
const iHp = Math.round(iH / 100);

class App extends PureComponent {

    render() {
        const {sputniki, moon} = this.props;
        const viewBoxCanvas = [0, 0, iW, iH];
        const earthConf = {
            width: iW,
            height: iH,
            viewBox: [iW / -2 + iWp * 10, iH / -2 + iHp * 20, iW, iH]
        };
        const sputnikConf = {
            width: iW,
            height: iH,
            viewBox: [-iWp * 15, -iHp * 10, iW, iH]
        };
        const moonConf = {
            width: iW,
            height: iH,
            viewBox: [-iWp * 15, iHp * 10, iW, iH]
        };
        const rocketConf = {
            width: iW,
            height: iH,
            viewBox: [iW / -2 + iWp * 10, 0, iW, iH]
        };
        return (
            <div>
                <svg
                    viewBox={viewBoxCanvas}
                >
                    <Earth {...earthConf}/>
                    {
                        sputniki.map(
                            (v, index) => {
                                return <Sputnik key={index} {...sputnikConf} typeSputnik={"ARTIFICIAL"} v={v}
                                                index={index}>
                                    <WrapperSputnik/>
                                </Sputnik>
                            }
                        )
                    }
                    <Sputnik {...moonConf} typeSputnik={"NATURAL"} v={moon.v}>
                        <Moon/>
                    </Sputnik>
                    <Rocket {...earthConf}/>
                </svg>
                <ControlLayout/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sputniki: state.sputniki,
        moon: state.moon
    }
};

export default connect(mapStateToProps)(App);
