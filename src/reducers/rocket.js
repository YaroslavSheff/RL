const initialState = {
    running: false
};

export default function rocket(state = initialState, action) {
    switch (action.type) {
        case 'START_ROCKET':
            return Object.assign({}, state, {running: true});
        case 'STOP_ROCKET':
            return Object.assign({}, state, {running: false});
        default:
            return state;
    }
}