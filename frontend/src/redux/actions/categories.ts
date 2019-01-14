import {
    CATEGORIES_RECEIVES_LIST,
    CATEGORIES_SHOW_SPINNER,
    CATEGORIES_HIDE_SPINNER
} from "../constants/categories";
import { getCategories as apiGetCategories } from "../../services/api/categories";
export interface CategoriesReceivesListAction {
    type: "CATEGORIES_RECEIVES_LIST"
    payload: any
}
export interface CategoriesShowSpinnerAction {
    type: "CATEGORIES_SHOW_SPINNER"
}
export interface CategoriesHideSpinnerAction {
    type: "CATEGORIES_HIDE_SPINNER"
}
export type Action = CategoriesReceivesListAction | CategoriesShowSpinnerAction | CategoriesHideSpinnerAction;

export const getCategories = () => async (dispatch: any) => {
    try {
        dispatch(showSpinner());
        const categories = await apiGetCategories();
        dispatch(categoriesReceivesList(categories));
        dispatch(hideSpinner());
    } catch (error) {
        dispatch(hideSpinner());
    }
}

export function categoriesReceivesList(payload: any): CategoriesReceivesListAction {
    return {
        type: CATEGORIES_RECEIVES_LIST,
        payload
    }
}
export function showSpinner(): CategoriesShowSpinnerAction {
    return {
        type: CATEGORIES_SHOW_SPINNER
    }
}
export function hideSpinner(): CategoriesHideSpinnerAction {
    return {
        type: CATEGORIES_HIDE_SPINNER
    }
}