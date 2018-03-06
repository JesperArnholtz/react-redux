import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function authorReducer(state = initialState.authors, action){ 
    switch(action.type){ 
        case types.LOAD_AUTHORS_SUCCES:
        // return [...state,
        //     Object.assign({}, action.course) 
        // ];

        return action.authors;

        default:
            return state;
    }
}