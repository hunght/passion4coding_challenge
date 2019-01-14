import {
    Action,
} from "../actions/verticals";
import {
    VERTICALS_RECEIVES_LIST,
    VERTICALS_HIDE_SPINNER,
    VERTICALS_SHOW_SPINNER
} from "../constants/verticals";

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
        case VERTICALS_RECEIVES_LIST:
            return { ...state, list: action.payload }
        case VERTICALS_SHOW_SPINNER:
            return { ...state, isFetching: true };
        case VERTICALS_HIDE_SPINNER:
            return { ...state, isFetching: false };
        default:
            return state;
    }
};
