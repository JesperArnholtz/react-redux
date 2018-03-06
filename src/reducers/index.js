import {combineReducers} from 'redux';
import courseReducer from './course-reducer';
import authorReducer from './author-reducer';

const rootReducer =  combineReducers({
    courseReducer,
    authorReducer    
});

export default rootReducer;