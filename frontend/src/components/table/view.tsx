
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from "./styles";
interface IProps {
    headers: any[],
    items: any[],
    classes: any
}

const DataTable = ({
    headers,
    items,
    classes
}: IProps) => (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {
                            (headers || []).map((value: string, index: number) => <TableCell align="right" key={index}>{value}</TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(items || []).map((item: any, index: number) => (
                        <TableRow key={index}>
                            {
                                (headers || []).map((value: string, index: number) => <TableCell align="right" key={index}>{item[value]}</TableCell>)
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );

//@ts-ignore
export default withStyles(styles)(DataTable);