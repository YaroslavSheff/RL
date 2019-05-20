export default function sputniki(state = [10, 10], action) {
    if (action.type === 'CHANGE_SPEED') {
        const newState = state.slice();
        newState.splice(action.index, 1, action.value);
        return newState
    }
    if (action.type === 'ADD_SPUTNIK') {
        const newState = state.slice();
        newState.push(Math.round(Math.random()*1000/100));
        return newState
    }
    if (action.type === 'REMOVE_SPUTNIK') {
        const newState = state.slice();
        newState.pop();
        return newState
    }
    return state;
}