import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Sputnik from '../icons/ship.svg';
import '../styles/ship.css';

class Rocket extends PureComponent {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const runner = window.document.querySelector('.run');
        prevProps.running === 'false'
            ? runner.style.animationName = 'move'
            : runner.style.animationName = 'none'
    }

    render() {
        const path = 'M 588,100 l 0,-900';
        const {width, height, viewBox} = this.props;
        return (
            <svg width={width} height={height}
                 viewBox={[viewBox[0], viewBox[1] - 450, viewBox[2] - 100, viewBox[3] + 700]}>
                <path d={path} stroke="green"
                      strokeWidth="1px" strokeDasharray="3" fill={"none"}/>
                <g className={'run'}>
                    <Sputnik {...this.props} />
                </g>
            </svg>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        running: state.rocket.running.toString()
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Rocket);