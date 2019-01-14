import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from "./styles";
interface IProps {
    email: string,
    password: string,
    classes: any;
    onSubmit: () => void;
    setEmail: (email: string) => void,
    setPassword: (email: string) => void,
}
const SignIn: React.SFC<IProps> = ({
    email,
    password,
    setEmail,
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
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input value={email} onChange={({ target }: any) => setEmail(target.value)} id="email" name="email" autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input value={password} onChange={({ target }: any) => setPassword(target.value)} name="password" type="password" id="password" autoComplete="current-password" />
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