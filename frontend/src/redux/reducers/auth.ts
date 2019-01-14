import {
    Action,
} from "../actions/auth";
import {
    AUTH_SIGN_IN_SUCCESS,
    AUTH_SHOW_SPINNER,
    AUTH_HIDE_SPINNER
} from "../constants/auth";

export interface State {
    isFetching: boolean,
    data: any;
}

export const initialState: State = {
    isFetching: false,
    data: null,
};

/**
 * @desc Activity reducer.
 * @param {State} state Current state.
 * @param {Action} action Performed action.
 * @returns {State} Next state.
 */
export default (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case AUTH_SIGN_IN_SUCCESS:
            return { ...state, data: action.payload }
        case AUTH_SHOW_SPINNER:
            return { ...state, isFetching: true };
        case AUTH_HIDE_SPINNER:
            return { ...state, isFetching: false };
        default:
            return state;
    }
};
