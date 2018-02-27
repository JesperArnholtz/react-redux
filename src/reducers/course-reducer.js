import * as types from '../actions/action-types';

export default function courseReducer(state = [], action){ 
    switch(action.type){ 
        case types.LOAD_COURSES_SUCCES:
        // return [...state,
        //     Object.assign({}, action.course) 
        // ];

        return action.courses;

        default:
            return state;
    }
}