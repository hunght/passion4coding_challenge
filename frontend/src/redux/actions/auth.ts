import {
    AUTH_SHOW_SPINNER,
    AUTH_HIDE_SPINNER
} from "../constants/auth";
import history from "../../services/history";
import { signIn as apiSignIn, signUp as apiSignUp } from "../../services/api/auth";

export interface SignUpSuccessAction {
    type: "AUTH_SIGN_UP_SUCCESS"
    payload: any
}
export interface AuthShowSpinnerAction {
    type: "AUTH_SHOW_SPINNER"
}
export interface AuthHideSpinnerAction {
    type: "AUTH_HIDE_SPINNER"
}
export type Action = AuthShowSpinnerAction | AuthHideSpinnerAction;

export const signIn = (username: string) => async (dispatch: any) => {
    try {
        dispatch(showSpinner());
        const oauth = await apiSignIn(username);
        localStorage.setItem('oauth', JSON.stringify(oauth));
        history.push('/');
        dispatch(hideSpinner());
    } catch (error) {
        dispatch(hideSpinner());
    }
}
export const signUp = (username: string) => async (dispatch: any) => {
    try {
        dispatch(showSpinner());
        const user = await apiSignUp(username);
        if (user) {
            history.push('/login');
        }
        dispatch(hideSpinner());
    } catch (error) {
        dispatch(hideSpinner());
    }
}
export function showSpinner(): AuthShowSpinnerAction {
    return {
        type: AUTH_SHOW_SPINNER
    }
}
export function hideSpinner(): AuthHideSpinnerAction {
    return {
        type: AUTH_HIDE_SPINNER
    }
}