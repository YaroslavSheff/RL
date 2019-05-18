const initialState = {
    v: 1
};

export default function moon(state = initialState, action) {
    if (action.type === 'CHANGE_SPEED') {
        return Object.assign({}, state, {v: action.value});
    }
    return state;
}