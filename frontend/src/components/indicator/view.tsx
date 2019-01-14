import * as React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
const styles = (theme: any) => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
    overlay: {
        top: 0,
        left: 0,
        width: '100%',
        right: 0,
        height: '100%',
        textAlign: 'center',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, .5)',
        zIndex: 9990
    }
});
interface IProps {
    isLoading: boolean | null,
    classes: any | null
}
const Indicator: React.SFC<IProps> = ({ isLoading, classes }) => {
    if (!isLoading) return null;
    return (
        <div className={classes.overlay}>
            <CircularProgress className={classes.progress} color="secondary" />
        </div>
    );
}
//@ts-ignore
export default withStyles(styles)(Indicator);
