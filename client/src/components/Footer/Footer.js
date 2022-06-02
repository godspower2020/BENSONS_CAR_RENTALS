import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    const getYear = new Date().getFullYear();
    
    return (
        <div position="sticky" className={classes.footer}>
            <Typography variant="body1" color="inherit">
                &copy; {getYear} Rento, all rights reserved.
            </Typography>
        </div>
    )
}

export default Footer;
