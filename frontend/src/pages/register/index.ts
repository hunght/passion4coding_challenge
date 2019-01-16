import { connect } from "react-redux";
import { compose, withState, withHandlers } from "recompose";
import { signUp } from "../../redux/actions/auth";
import View from "./view";
export default compose(
    withState('username', 'setUsername', ''),
    connect(
        ({ auth }: any) => ({ ...auth }),
        ({ signUp })
    ),
    withHandlers({
        onSubmit: ({ signUp, username }: any) => async (event: any) => {
            event.preventDefault();
            if (username) return signUp(username)
        }
    })
)(View);