import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Ship from '../icons/ship.svg';
import '../styles/ship.css';

class Rocket extends PureComponent {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.running !== this.props.running) {
            const runner = window.document.querySelector('.run');
            prevProps.running === 'false'
                ? runner.style.animationName = 'move'
                : runner.style.animationName = 'none'
        }
    }

    componentDidMount() {
        const {viewBox} = this.props;
        const path = 'M ' + viewBox[2] / 10 + ',' + viewBox[3] / 20 + ' l 0,-900';
        const runner = window.document.querySelector('.run');
        runner.style.motionPath = 'path(\'' + path + '\')';
        runner.style.offsetPath = 'path(\'' + path + '\')';
    }

    render() {
        const {width, height, viewBox} = this.props;
        const path = 'M ' + viewBox[2] / 9 + ',' + viewBox[3] / 12 + ' l 0,-900';
        return (
            <svg width={width} height={height}
                 viewBox={viewBox}>
                {/*<path d={path} stroke="green"
                      strokeWidth="1px" strokeDasharray="3" fill={"none"}/>*/}
                <g className={'run'}>
                    <Ship/>
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