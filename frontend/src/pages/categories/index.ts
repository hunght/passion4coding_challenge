import { connect } from "react-redux";
import { compose, withState, lifecycle } from "recompose";
import { getCategories } from "../../redux/actions/categories";
import View from "./view";
export default compose(
    withState('isDrawerOpen', 'setIsDrawerOpen', false),
    connect(
        ({ categories }: any) => ({ ...categories }),
        { getCategories }
    ),
    lifecycle({
        componentDidMount() {
            this.props.getCategories();
        }
    })
)(View)