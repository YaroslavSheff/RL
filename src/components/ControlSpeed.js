import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Minus from '../icons/button-minus.svg';
import Plus from '../icons/button-add.svg';
import '../styles/ControlLayout.css';
import RangeSpeed from "./RangeSpeed";

class ControlSpeed extends PureComponent {


    render() {
        const {sputniki, initial} = this.props;
        return (
            <div className={'controlSpeed'}>
                {
                    sputniki.map(
                        (v, index) => {
                            initial.value = v;
                            return <RangeSpeed key={index} initial={initial} index={index}/>
                        }
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sputniki: state.sputniki
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlSpeed);