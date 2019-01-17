import * as React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, List, ListSubheader, ListItemText, ListItem, Typography, Button, Modal } from '@material-ui/core';
import styles from "./styles";
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
interface IProps {
    classes: any,
    isOpenModal: boolean,
    selectedVerticals: any[],
    selectedCategories: any[],
    selectedCourses: any[],
    listVerticals: any[],
    listCategories: any[],
    listCourses: any[],
    selectedCoursesData: any[],
    onSelectedVertical: (id: number) => void,
    onSelectedCategory: (id: number) => void,
    onSelectedCourse: (id: number) => void,
    onStart: () => void,
    onReset: () => void,
    setIsOpenModal: (status: boolean) => void
}
const View = ({
    classes,
    isOpenModal,
    listVerticals,
    listCategories,
    listCourses,
    onSelectedVertical,
    onSelectedCategory,
    onSelectedCourse,
    selectedVerticals,
    selectedCategories,
    selectedCourses,
    selectedCoursesData,
    onStart,
    onReset,
    setIsOpenModal
}: IProps) => {
    return (
        <Grid container className={classes.root}>
            <Grid item xs={8}>
                <Paper className={classes.paper}>
                    <Typography color="primary" variant="title">
                        Pick some verticals
                    </Typography>
                    <div>
                        {
                            (listVerticals || []).map((vertical: any) => (
                                <Button
                                    key={vertical.Id}
                                    variant="contained"
                                    color={classnames({
                                        'primary': !selectedVerticals.includes(vertical.Id),
                                        'secondary': selectedVerticals.includes(vertical.Id),
                                    })}
                                    className={classes.button}
                                    onClick={() => onSelectedVertical(vertical.Id)}
                                >
                                    {vertical.Name}
                                </Button>
                            ))
                        }
                    </div>
                </Paper>
            </Grid>
            {
                listCategories.length > 0 && (
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <Typography color="primary" variant="title">
                                Pick some specifics
                            </Typography>
                            <div>
                                {
                                    listCategories.map((category: any) => (
                                        <Button
                                            key={category.Id}
                                            variant="contained"
                                            color={classnames({
                                                'primary': !selectedCategories.includes(category.Id),
                                                'secondary': selectedCategories.includes(category.Id),
                                            })}
                                            className={classes.button}
                                            onClick={() => onSelectedCategory(category.Id)}
                                        >
                                            {category.Name}
                                        </Button>
                                    ))
                                }
                            </div>
                        </Paper>
                    </Grid>
                )
            }

            {
                listCourses.length > 0
                && (
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <Typography color="primary" variant="title">
                                Now just pick your courses!
                        </Typography>
                            <div>
                                {
                                    listCourses.map((course: any) => (
                                        <Button
                                            key={course.Id}
                                            variant="contained"
                                            color={classnames({
                                                'primary': !selectedCourses.includes(course.Id),
                                                'secondary': selectedCourses.includes(course.Id),
                                            })}
                                            className={classes.button}
                                            onClick={() => onSelectedCourse(course.Id)}
                                        >
                                            {course.Name}
                                        </Button>
                                    ))
                                }
                            </div>
                        </Paper>
                    </Grid>
                )
            }

            {
                selectedCourses.length > 0
                && listCourses.length > 0
                && (
                    <Grid item xs={8}>
                        <Button
                            size="medium"
                            variant="contained"
                            color="secondary"
                            className={classes.margin}
                            onClick={onStart}
                        >
                            Start
                        </Button>
                        {` `}
                        <Button
                            size="small"
                            variant="contained"
                            className={classes.margin}
                            onClick={onReset}
                        >
                            Reset
                        </Button>
                    </Grid>
                )
            }
            <Modal
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
            >
                <div style={getModalStyle()} className={classes.paperModal}>
                    <Typography variant="h6" id="modal-title">
                        Selected courses:
                    </Typography>
                    <List className={classes.rootList} subheader={<li />}>
                        {selectedCoursesData.map(course => (
                            <li key={`section-${course.Id}`} className={classes.listSection}>
                                <ul className={classes.ul}>
                                    <ListSubheader>{`Course Id: ${course.Id}`}</ListSubheader>
                                    <ListItem>
                                        <ListItemText primary={`Name: ${course.Name}`} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={`Author: ${course.Author}`} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={`Categories: ${course.Categories}`} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={`Name: ${course.Name}`} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={`State: ${course.State}`} />
                                    </ListItem>
                                </ul>
                            </li>
                        ))}
                    </List>
                </div>
            </Modal>
        </Grid>
    );
}
//@ts-ignore
export default withStyles(styles)(View);
