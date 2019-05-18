import React, { PureComponent } from 'react';
import logo from '../icons/earth.svg';
import '../styles/App.css';


class Earth extends PureComponent {
    render() {
        return (
            <div className="EarthRoot">
                    <img src={logo} className="Earth" alt="logo" />
            </div>
        );
    }
}

export default Earth;