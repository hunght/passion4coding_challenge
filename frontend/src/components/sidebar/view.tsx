import * as React from "react";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Indicator from '../../components/indicator';
import styles from "./styles";
interface IProps {
    title?: string,
    isFetching: boolean,
    isDrawerOpen: boolean;
    setIsDrawerOpen: (status: boolean) => any;
    classes: any,
    redirectTo: (to: string) => any
}
const View: React.SFC<IProps> = ({
    title,
    isFetching,
    isDrawerOpen,
    setIsDrawerOpen,
    classes,
    redirectTo
}) => {
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="absolute"
                className={classNames(classes.appBar, isDrawerOpen && classes.appBarShift)}
            >
                <Toolbar disableGutters={!isDrawerOpen} className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={() => setIsDrawerOpen(true)}
                        className={classNames(
                            classes.menuButton,
                            isDrawerOpen && classes.menuButtonHidden,
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    {
                        title && (
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                className={classes.title}
                            >
                                {title}
                            </Typography>
                        )
                    }

                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !isDrawerOpen && classes.drawerPaperClose),
                }}
                open={isDrawerOpen}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={() => setIsDrawerOpen(false)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <div>
                        <ListItem button onClick={() => redirectTo('/categories')}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Categories" />
                        </ListItem>
                        <ListItem button onClick={() => redirectTo('/courses')}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Courses" />
                        </ListItem>
                        <ListItem button onClick={() => redirectTo('/verticals')}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Verticals" />
                        </ListItem>
                    </div>
                </List>
                <Divider />
            </Drawer>
            <Indicator isLoading={isFetching} />
        </div>
    );
}
//@ts-ignore
export default withStyles(styles)(View);