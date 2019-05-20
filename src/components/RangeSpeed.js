import React, {PureComponent} from 'react';
import {connect} from 'react-redux';


class RangeSpeed extends PureComponent {

    constructor(props){
        super(props);
        this.state = props.initial;
        this.onChangeRange = this.onChangeRange.bind( this );
    }

    onChangeRange(e){
        this.setState({value: e.target.value}, () => this.props.setSpeed(this.state.value, this.props.index))
    }

    render() {
        const {value, min, max , step} = this.state;
        const { moon, index } = this.props;
        return (
            <div>
                <div style={{paddingRight: '10px', color: 'white'}}>{(moon ? 'Луна ' : 'Спутник ' + index + ' ') + 'v:' + value}</div>
                <input type="range" value={value} step={step} min={min} max={max} onChange={this.onChangeRange} style={{width: '100%'}}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        setSpeed: (v, index) => {
            index !== undefined
                ? dispatch({type: "CHANGE_SPEED", value: v, index: index}) // скорость искусственного спутника
                : dispatch({type: "CHANGE_SPEED_MOON", value: v, index: index}) // скорость луны
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RangeSpeed);