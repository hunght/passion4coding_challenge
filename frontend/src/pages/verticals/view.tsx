import * as React from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DataTable from '../../components/table';
import Indicator from '../../components/indicator';
import styles from "./styles";
import SideBar from "../../components/sidebar";
interface IProps {
    list: any[],
    isFetching: boolean,
    isDrawerOpen: boolean;
    setIsDrawerOpen: (status: boolean) => any;
    classes: any
}
const View: React.SFC<IProps> = ({
    list,
    isFetching,
    classes
}) => {
    const headers = ["Id", "Name"];
    return (
        <div className={classes.root}>
            <SideBar title="Verticals" />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Typography variant="h4" gutterBottom component="h2">
                    Verticals
                </Typography>
                <div className={classes.tableContainer}>
                    <DataTable headers={headers} items={list} />
                </div>
            </main>
            <Indicator isLoading={isFetching} />
        </div>
    );
}
//@ts-ignore
export default withStyles(styles)(View);