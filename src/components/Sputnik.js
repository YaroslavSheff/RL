import React, { PureComponent } from 'react';
import logo from '../icons/sputnik.svg';
import '../styles/Sputnik.css';


class Sputnik extends PureComponent {
    render() {
        return (
            <div className="SputnikRoot">
                <img src={logo} className="Sputnik" alt="logo" />
            </div>
        );
    }
}

export default Sputnik;