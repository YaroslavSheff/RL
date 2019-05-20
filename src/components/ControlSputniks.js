import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Minus from '../icons/button-minus.svg';
import Plus from '../icons/button-add.svg';
import '../styles/ControlLayout.css';

class ControlSputniks extends PureComponent {

    constructor(props) {
        super(props);
        this.onAddSputnik = this.onAddSputnik.bind(this)
        this.onRemoveSputnik = this.onRemoveSputnik.bind(this)
    }

    onAddSputnik() {
        this.props.addSputnik();
    }

    onRemoveSputnik() {
        this.props.removeSputnik();
    }

    render() {
        return (
            <div className={'controlSputniks'}>
                <span style={{padding: '10px 10px 10px 30px', color: 'white'}}>Спутники</span>
                <Minus onClick={this.onRemoveSputnik}/>
                <Plus onClick={this.onAddSputnik}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        addSputnik: () => dispatch({type: 'ADD_SPUTNIK'}),
        removeSputnik: () => dispatch({type: 'REMOVE_SPUTNIK'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlSputniks);