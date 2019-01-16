import { toastr } from 'react-redux-toastr';
import {
    VERTICALS_RECEIVES_LIST,
    VERTICALS_SHOW_SPINNER,
    VERTICALS_HIDE_SPINNER
} from "../constants/verticals";
import { getVerticals as apiGetVerticals } from "../../services/api/verticals"
export interface VerticalsReceivesListAction {
    type: "VERTICALS_RECEIVES_LIST"
    payload: any
}
export interface VerticalsShowSpinnerAction {
    type: "VERTICALS_SHOW_SPINNER"
}
export interface VerticalsHideSpinnerAction {
    type: "VERTICALS_HIDE_SPINNER"
}
export type Action = VerticalsReceivesListAction | VerticalsShowSpinnerAction | VerticalsHideSpinnerAction;

export const getVerticals = () => async (dispatch: any) => {
    try {
        dispatch(showSpinner());
        const verticals = await apiGetVerticals();
        dispatch(verticalsReceivesList(verticals));
        dispatch(hideSpinner());
    } catch (error) {
        const {
            error_description
        } = error.response.data;
        toastr.error(error_description)
        dispatch(hideSpinner());
    }
}

export function verticalsReceivesList(payload: any): VerticalsReceivesListAction {
    return {
        type: VERTICALS_RECEIVES_LIST,
        payload
    }
}
export function showSpinner(): VerticalsShowSpinnerAction {
    return {
        type: VERTICALS_SHOW_SPINNER
    }
}
export function hideSpinner(): VerticalsHideSpinnerAction {
    return {
        type: VERTICALS_HIDE_SPINNER
    }
}