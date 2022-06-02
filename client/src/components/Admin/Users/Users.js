import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';

import User from './User/User';
import useStyles from './styles';

const Users = () => {
    const users = useSelector((state) => state.users);
const classes = useStyles();


console.log(users);

    return (
        !users.length ? <CircularProgress /> : (
                <TableContainer component={Paper}>
                    <Table className={classes.font} sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow className={classes.black}>
                                <TableCell className={classes.white}>S/N</TableCell>
                                <TableCell className={classes.white}>Full Name</TableCell>
                                <TableCell className={classes.white} align="right">Email</TableCell>
                                <TableCell className={classes.white} align="right">Registered</TableCell>
                                <TableCell className={classes.red} align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {users.map((user, index) => (
                            <TableRow className={classes.interval} key={user._id}>
                                <User user={user} index={index} />
                            </TableRow>
                        ))}
                         </TableBody>
                    </Table>
                </TableContainer>
        )
    )
}

export default Users;
