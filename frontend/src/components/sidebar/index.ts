import { compose, withState, withHandlers } from "recompose";
import { withRouter } from "react-router-dom";
import View from "./view";
export default withRouter(compose(
    withState('isDrawerOpen', 'setIsDrawerOpen', false),
    withHandlers({
        redirectTo: ({history}: any) => async (to: string) => history.push(to)
    })
)(View))