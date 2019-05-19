import React, {PureComponent} from 'react';
import Earth from './icons/earth.svg'
import Sputnik from "./components/Sputnik";
import Moon from "./components/Moon";
import WrapperSputnik from "./components/WrapperSputnik";
import Rocket from "./components/Rocket";
import ControlLayout from "./components/ControlLayout";

import './styles/App.css';

const iW = window.innerWidth;
const iH = window.innerHeight;

class App extends PureComponent {
    render() {
        const viewBoxCanvas = [0, 0, iW, iH];
        const earthConf = {
            width: iW,
            height: iH,
            viewBox: [iW / -2 + 200, iH / -2 + 200, iW, iH]
        };
        const sputnikConf = {
            width: 1600,
            height: 1200,
            viewBox: [-100, -100, 800, 1600]
        };
        const rocketConf = {
            width: 1600,
            height: 1200,
            viewBox: [-100, -100, 800, 1600]
        };
        return (
            <div>
                <svg
                    viewBox={viewBoxCanvas}
                >
                    <Earth {...earthConf}/>
                    <Sputnik {...sputnikConf} typeSputnik={"ARTIFICIAL"}>
                        <WrapperSputnik/>
                    </Sputnik>
                    <Sputnik {...sputnikConf} typeSputnik={"ARTIFICIAL"}>
                        <WrapperSputnik/>
                    </Sputnik>
                    <Sputnik {...sputnikConf} typeSputnik={"ARTIFICIAL"}>
                        <WrapperSputnik/>
                    </Sputnik>
                    <Sputnik {...sputnikConf} typeSputnik={"ARTIFICIAL"}>
                        <WrapperSputnik/>
                    </Sputnik>
                    <Sputnik {...sputnikConf} typeSputnik={"NATURAL"}>
                        <Moon/>
                    </Sputnik>
                    <Rocket {...rocketConf}/>
                </svg>
                <ControlLayout/>
            </div>
        );
    }
}

export default App;
