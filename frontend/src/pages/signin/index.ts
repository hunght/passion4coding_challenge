import { connect } from "react-redux";
import { compose, withState, withHandlers } from "recompose";
import { signIn } from "../../redux/actions/auth";
import View from "./view";
export default compose(
    withState('email', 'setEmail', ''),
    withState('password', 'setPassword', ''),
    connect(
        ({ auth }: any) => ({ ...auth }),
        ({ signIn })
    ),
    withHandlers({
        onSubmit: ({ signIn, email, password }: any) => async (event: any) => {
            event.preventDefault();
            if (email && password) return signIn(email, password)
        }
    })
)(View);