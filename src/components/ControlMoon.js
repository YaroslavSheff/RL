import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Minus from '../icons/button-minus.svg';
import Plus from '../icons/button-add.svg';
import '../styles/ControlLayout.css';
import RangeSpeed from "./RangeSpeed";

class ControlMoon extends PureComponent {

    constructor(props) {
        super(props);
    }


    render() {
        const {v, initial} = this.props;
        initial.value = v;
        return (
            <div className={'controlMoon'}>
                <RangeSpeed initial={initial} moon/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        v: state.moon.v
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlMoon);