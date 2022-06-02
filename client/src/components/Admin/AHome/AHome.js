import React, { useEffect } from 'react'
import { Container, Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getUsers } from '../../../actions/users';
import Users from '../Users/Users';
import useStyles from './styles';

const AHome = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <Grow in>
            <Container>
                <main className={classes.content} />
                <Users />
            </Container>
        </Grow>
    )
}

export default AHome;
