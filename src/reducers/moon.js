const initialState = {
    v: 5
};

export default function moon(state = initialState, action) {
    if (action.type === 'CHANGE_SPEED_MOON') {
        return Object.assign({}, state, {v: action.value});
    }
    return state;
}