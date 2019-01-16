import { combineReducers } from "redux";
import { reducer as toastrReducer } from 'react-redux-toastr';
import auth from "./auth";
import courses from "./courses";
import categories from "./categories";
import verticals from "./verticals";
export const rootReducers = {
    auth,
    courses,
    categories,
    verticals,
    toastr: toastrReducer
};

export default combineReducers(rootReducers);
