import {
    Action,
} from "../actions/courses";
import {
    COURSES_RECEIVES_LIST,
    COURSES_HIDE_SPINNER,
    COURSES_SHOW_SPINNER
} from "../constants/courses";

export interface State {
    isFetching: boolean,
    list: any[] | null;
}

export const initialState: State = {
    isFetching: false,
    list: [],
};

/**
 * @desc Activity reducer.
 * @param {State} state Current state.
 * @param {Action} action Performed action.
 * @returns {State} Next state.
 */
export default (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case COURSES_RECEIVES_LIST:
            return { ...state, list: action.payload }
        case COURSES_SHOW_SPINNER:
            return { ...state, isFetching: true };
        case COURSES_HIDE_SPINNER:
            return { ...state, isFetching: false };
        default:
            return state;
    }
};
