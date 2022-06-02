import React from 'react';
import { TableCell, Button, IconButton } from '@material-ui/core';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../../actions/users';

const User = ({ user, index }) => {
    const dispatch = useDispatch();

    return (
        <>
            <TableCell component="th" scope="row">{index + 1}
            </TableCell>
            <TableCell component="th" scope="row">{user.name}
            </TableCell>
            <TableCell align="right">{user.email}</TableCell>
            <TableCell align="right">{moment(user.createdAt).fromNow()}</TableCell>
            <TableCell align="right">
            <IconButton color="inherit" size="large" onClick={() => dispatch(deleteUser(user._id))}>
                <DeleteIcon color="secondary" fontSize="small" />
            </IconButton>
            </TableCell>
        </>
    )
}

export default User
