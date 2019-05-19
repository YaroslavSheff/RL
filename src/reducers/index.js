import {combineReducers} from 'redux';

import sputniki from './sputniki';
import moon from './moon';
import rocket from './rocket';

export default combineReducers({
    sputniki,
    moon,
    rocket
});