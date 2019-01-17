
const styles = (theme: any) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 2,
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        alignSelf: 'center',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    },
    paperModal: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
    rootList: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
});

export default styles;