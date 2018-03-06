import * as types from '../actions/action-types';

//state er her kun en del af state. Et array af courses, ikke hele staten
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCES:
      return action.courses;

    case types.CREATE_COURSE_SUCCES:
      return [...state,
        Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCES:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}