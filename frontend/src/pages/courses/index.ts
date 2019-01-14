import * as React from "react";
import { connect } from "react-redux";
import { compose, withState, lifecycle } from "recompose";
import { getCourses } from "../../redux/actions/courses";
import View from "./view";
export default compose(
    withState('isDrawerOpen', 'setIsDrawerOpen', false),
    connect(
        ({ courses }: any) => ({ ...courses }),
        { getCourses }
    ),
    lifecycle({
        componentDidMount() {
            this.props.getCourses();
        }
    })
)(View)