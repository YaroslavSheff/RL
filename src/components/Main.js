import React, { PureComponent } from 'react';
import '../styles/App.css';

class Main extends PureComponent {
    render() {
        return (
            <div className="Main">
                {this.props.children}
            </div>
        );
    }
}

export default Main;