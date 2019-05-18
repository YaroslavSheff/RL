import React, { PureComponent } from 'react';
import logo from '../icons/moon.svg';
import '../styles/App.css';


class Moon extends PureComponent {
    render() {
        return (
            <div className="Moon-root">
                <img src={logo} className="Moon" alt="logo" />
            </div>
        );
    }
}

export default Moon;