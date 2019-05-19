import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import '../styles/ControlLayout.css';


class ControlLayout extends PureComponent {

    constructor(props) {
        super(props);
        this.onClickLaunch = this.onClickLaunch.bind(this);
    }

    onClickLaunch() {
        this.props.running ? this.props.stop() : this.props.launch();
    };

    render() {
        return (
            <div className={'controlLayout'}>
                <div className={'flexLayout'}>
                    <div className={'footer'}>
                        <div className={'startButton'} onClick={this.onClickLaunch}>
                            {'запуск'}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        running: state.rocket.running
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        launch: () => dispatch({type: "START_ROCKET"}),
        stop: () => dispatch({type: "STOP_ROCKET"}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlLayout);