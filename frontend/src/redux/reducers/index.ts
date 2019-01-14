import { combineReducers } from "redux";
import auth from "./auth";
import courses from "./courses";
import categories from "./categories";
import verticals from "./verticals";
export const rootReducers = {
    auth,
    courses,
    categories,
    verticals,
};

export default combineReducers(rootReducers);
