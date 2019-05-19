import React, {PureComponent} from 'react';
import Sputnik from '../icons/sputnik.svg';

class WrapperSputnik extends PureComponent {
    render() {
        return (
            <Sputnik {...this.props} />
        );
    }
}

export default WrapperSputnik;