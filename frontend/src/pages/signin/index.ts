import { connect } from "react-redux";
import { compose, withState, withHandlers } from "recompose";
import { signIn } from "../../redux/actions/auth";
import View from "./view";
export default compose(
    withState('username', 'setUsername', ''),
    connect(
        ({ auth }: any) => ({ ...auth }),
        ({ signIn })
    ),
    withHandlers({
        onSubmit: ({ signIn, username }: any) => async (event: any) => {
            event.preventDefault();
            if (username) return signIn(username)
        }
    })
)(View);