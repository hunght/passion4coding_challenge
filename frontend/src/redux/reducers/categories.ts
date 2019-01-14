import {
    Action,
} from "../actions/categories";
import {
    CATEGORIES_RECEIVES_LIST,
    CATEGORIES_SHOW_SPINNER,
    CATEGORIES_HIDE_SPINNER
} from "../constants/categories";

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
        case CATEGORIES_RECEIVES_LIST:
            return { ...state, list: action.payload }
        case CATEGORIES_SHOW_SPINNER:
            return { ...state, isFetching: true };
        case CATEGORIES_HIDE_SPINNER:
            return { ...state, isFetching: false };
        default:
            return state;
    }
};
