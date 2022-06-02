import React from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';

import business from '../../images/jeep-grand-cherokee-5d-weiss-2018.png';
import chart from '../../images/land-rover-range-rover-sport-svr-blau-2020.png';
import logo from '../../images/dodge-challenger-2d-orange-2021.png';
import lego from '../../images/toyota-tundra-dcab-blau-2019.png';
import bar from '../../images/bar.png';
import puzzle from '../../images/puzzle.png';
import cart from '../../images/cart.png';

import useStyles from './styles';

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <Grid className={classes.content} container alignItems="stretch" spacing={3} maxWidth="lg">
                <Grid item xs={12} md={6}>
                    <Grid>
                        <Box className={classes.box1}>
                            <Typography className={`${classes.black} ${classes.marginBottom30}`} align="center" variant="h1">
                            The React <span className={classes.blue}>car&nbsp;rentals</span> you always wanted
                            </Typography>
                            <Typography className={`${classes.fontSize16} ${classes.marginBottom30}`} variant="body1" color="textSecondary" paragraph>
                            Dans rento provides a robust, customizable, and accessible library of foundational and advanced cars, enabling you to build your love for fast cars and robost systems.
                            <br /> <br />
                            click the get started button, signup or signin and be directed to the main app to rent cars
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Button component={Link} to="/auth" spacing={4} className={`${classes.flex} ${classes.lowercase} ${classes.homeButtoncolorPadding}`} variant="contained" color="primary">
                                        <Typography className={classes.buttonText} variant="body2" raised elevation={3}>
                                        get started
                                        </Typography>
                                        <ArrowRightAltIcon fontSize="medium" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Grid className={classes.backgroundGrey} item xs={12} md={6}>
                    <Box className={classes.box2}>
                        <Grid item xs={6} className={`${classes.flex} ${classes.grid1}`}>
                            <img src={business} alt="business" className={classes.lostImg}/>
                            <img src={logo} alt="logo" className={classes.lostImg}/>
                        </Grid>
                        <Grid item xs={6} className={`${classes.flex} ${classes.grid2}`}>
                            <img src={chart} alt="[chart]" className={classes.lostImg}/>
                            <img src={lego} alt="lego" className={classes.lostImg}/>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;
