import React from 'react';
import { Typography } from '@material-ui/core';

import car from '../../images/land-rover-range-rover-sport-svr-blau-2020.png';

import useStyles from './styles';

const About = () => {
    const classes = useStyles();

    return (
        <div className={`${classes.margin} ${classes.darkOverlay}`} >
            <div className={`${classes.fullWidth}`} >
                <img className={classes.lowerZIndex} src={car} alt="Car" width="60%" height="100%" />
                <div className={classes.middle}>
                    <Typography className={classes.middleLetter}>about us</Typography>
                </div>
            </div>
        </div>
    )
}

export default About
