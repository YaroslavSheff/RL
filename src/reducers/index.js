import { combineReducers } from 'redux';

import sputniki from './sputniki';
import moon from './moon';

export default combineReducers({
    sputniki,
    moon
});