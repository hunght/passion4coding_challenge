import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from "react-router-dom";

import styles from "./styles";
interface IProps {
    username: string,
    password: string,
    classes: any;
    onSubmit: () => void;
    setUsername: (username: string) => void,
    setPassword: (password: string) => void,
}
const SignIn: React.SFC<IProps> = ({
    username,
    setUsername,
    password,
    setPassword,
    classes,
    onSubmit
}) => {

    return (
        <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form method="POST" className={classes.form} onSubmit={onSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Username</InputLabel>
                        <Input value={username} onChange={({ target }: any) => setUsername(target.value)} id="email" name="email" autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input type="password" value={password} onChange={({ target }: any) => setPassword(target.value)} id="password" name="password" autoComplete="password" autoFocus />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign in
                    </Button>
                </form>
            </Paper>
        </main>
    );
}

//@ts-ignore
export default withStyles(styles)(SignIn);