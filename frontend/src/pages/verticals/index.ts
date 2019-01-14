import { connect } from "react-redux";
import { compose, withState, lifecycle } from "recompose";
import { getVerticals } from "../../redux/actions/verticals";
import View from "./view";
export default compose(
    withState('isDrawerOpen', 'setIsDrawerOpen', false),
    connect(
        ({ verticals }: any) => ({ ...verticals }),
        { getVerticals }
    ),
    lifecycle({
        componentDidMount() {
            this.props.getVerticals();
        }
    })
)(View)