import {
    AUTH_SHOW_SPINNER,
    AUTH_HIDE_SPINNER
} from "../constants/auth";
import { signIn as apiSignIn } from "../../services/api/auth";

export interface AuthShowSpinnerAction {
    type: "AUTH_SHOW_SPINNER"
}
export interface AuthHideSpinnerAction {
    type: "AUTH_HIDE_SPINNER"
}
export type Action = AuthShowSpinnerAction | AuthHideSpinnerAction;

export const signIn = (username: string, password: string) => async (dispatch: any) => {
    try {
        dispatch(showSpinner());
        const oauth = await apiSignIn(username, password);
        localStorage.setItem('oauth', JSON.stringify(oauth));
        window.location.href = "/";
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