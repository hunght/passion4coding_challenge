import {
    AUTH_SIGN_IN_SUCCESS,
    AUTH_SHOW_SPINNER,
    AUTH_HIDE_SPINNER
} from "../constants/auth";
import { signIn as apiSignIn } from "../../services/api/auth";
export interface SignInSuccessAction {
    type: "AUTH_SIGN_IN_SUCCESS"
    payload: any
}
export interface AuthShowSpinnerAction {
    type: "AUTH_SHOW_SPINNER"
}
export interface AuthHideSpinnerAction {
    type: "AUTH_HIDE_SPINNER"
}
export type Action = SignInSuccessAction | AuthShowSpinnerAction | AuthHideSpinnerAction;

export const signIn = (email: string, password: string) => async (dispatch: any) => {
    try {
        dispatch(showSpinner());
        const user = await apiSignIn(email, password);
        dispatch(signInSuccess(user));
        dispatch(hideSpinner());
    } catch (error) {
        dispatch(hideSpinner());
    }
}

export function signInSuccess(payload: any): SignInSuccessAction {
    return {
        type: AUTH_SIGN_IN_SUCCESS,
        payload
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