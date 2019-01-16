import {
    Action,
} from "../actions/auth";
import {
    AUTH_SHOW_SPINNER,
    AUTH_HIDE_SPINNER
} from "../constants/auth";

export interface State {
    isFetching: boolean,
}

export const initialState: State = {
    isFetching: false,
};

/**
 * @desc Activity reducer.
 * @param {State} state Current state.
 * @param {Action} action Performed action.
 * @returns {State} Next state.
 */
export default (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case AUTH_SHOW_SPINNER:
            return { ...state, isFetching: true };
        case AUTH_HIDE_SPINNER:
            return { ...state, isFetching: false };
        default:
            return state;
    }
};
