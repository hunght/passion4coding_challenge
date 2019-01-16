import { connect } from "react-redux";
import { compose, withState, withHandlers } from "recompose";
import { signIn } from "../../redux/actions/auth";
import View from "./view";
export default compose(
    withState('username', 'setUsername', 'admin'),
    withState('password', 'setPassword', '123456'),
    connect(
        ({ auth }: any) => ({ ...auth }),
        ({ signIn })
    ),
    withHandlers({
        onSubmit: ({ signIn, username, password }: any) => async (event: any) => {
            event.preventDefault();
            if (username && password) return signIn(username, password)
        }
    })
)(View);