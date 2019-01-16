import { toastr } from 'react-redux-toastr';
import {
    COURSES_RECEIVES_LIST,
    COURSES_SHOW_SPINNER,
    COURSES_HIDE_SPINNER
} from "../constants/courses";
import { getCourses as apiGetCourses } from "../../services/api/courses"
export interface CoursesReceivesListAction {
    type: "COURSES_RECEIVES_LIST"
    payload: any
}
export interface CoursesShowSpinnerAction {
    type: "COURSES_SHOW_SPINNER"
}
export interface CoursesHideSpinnerAction {
    type: "COURSES_HIDE_SPINNER"
}
export type Action = CoursesReceivesListAction | CoursesShowSpinnerAction | CoursesHideSpinnerAction;

export const getCourses = () => async (dispatch: any) => {
    try {
        dispatch(showSpinner());
        const courses = await apiGetCourses();
        dispatch(coursesReceivesList(courses));
        dispatch(hideSpinner());
    } catch (error) {
        const {
            error_description
        } = error.response.data;
        toastr.error(error_description)
        dispatch(hideSpinner());
    }
}

export function coursesReceivesList(payload: any): CoursesReceivesListAction {
    return {
        type: COURSES_RECEIVES_LIST,
        payload
    }
}
export function showSpinner(): CoursesShowSpinnerAction {
    return {
        type: COURSES_SHOW_SPINNER
    }
}
export function hideSpinner(): CoursesHideSpinnerAction {
    return {
        type: COURSES_HIDE_SPINNER
    }
}