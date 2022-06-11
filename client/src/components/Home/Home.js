import React from 'react';
import { Typography, Grid, Box, Button, Card, CardHeader, CardMedia, CardContent,Container  } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';

// import {ContactCard} from '../ContactCard/ContactCard';

import car1 from '../../images/jeep-grand-cherokee-5d-weiss-2018.png';
import car2 from '../../images/land-rover-range-rover-sport-svr-blau-2020.png';
import car3 from '../../images/dodge-challenger-2d-orange-2021.png';
import car4 from '../../images/toyota-tundra-dcab-blau-2019.png';
import clock from '../../images/clock.png';
import money from '../../images/money.png';
import blackCar from '../../images/logo.png';


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
                            Bensons Car Rental Nigeria offers all Purpose Car Hire Services in Nigeria which includes Airport and Hotel Shuttle Service, Corporate Car Hire, Car Hire for Private Engagements and Inter-State Transport Services.
                            <br /> <br />
                            click the get started button, signup or signin and be directed to the main app to rent cars
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Button component={Link} to="/auth" spacing={4} className={`${classes.flex} ${classes.uppercase} ${classes.homeButtoncolorPadding}`} variant="contained" color="primary">
                                        <Typography className={classes.buttonText} variant="body2" raised elevation={3}>
                                        BOOK NOW
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
                            <img src={car1} alt="car1" className={classes.lostImg}/>
                            <img src={car3} alt="car3" className={`${classes.lostImg} ${classes.shiftLeft}`}/>
                        </Grid>
                        <Grid item xs={6} className={`${classes.flex} ${classes.grid2}`}>
                            <img src={car2} alt="[car2]" className={`${classes.lostImg} ${classes.upperZindex}`} />
                            <img src={car4} alt="car4" className={`${classes.lostImg} ${classes.shiftLeft} ${classes.shiftLeftMore}`}/>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <div xs={12} sm={6} md={4}>
                <Container className={`${classes.flex}`}>
                    <div className={classes.padding}>
                        <Card>
                            <CardContent>
                                <Typography className={classes.fontSize24}><span className={classes.darkBlue}>Quick</span> <span className={classes.lightBlue}>Response</span></Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                image={clock}
                                alt="clock"
                                className={classes.imagePadding}
                            />
                            <CardContent>
                                <Typography variant="body2" className={classes.grayColor}>
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div className={classes.padding}>
                        <Card>
                            <CardContent>
                                <Typography className={classes.fontSize24}><span className={classes.green}>Flexible</span> <span className={classes.yellow}>Price</span></Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                image={money}
                                alt="clock"
                                className={classes.imagePadding}
                            />
                            <CardContent>
                                <Typography variant="body2" className={classes.grayColor}>
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div className={classes.padding}>
                        <Card>
                        <CardContent>
                                <Typography className={classes.fontSize24}>Choice Car</Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                image={blackCar}
                                alt="clock"
                                className={classes.imagePadding}
                            />
                            <CardContent>
                                <Typography variant="body2" className={classes.grayColor}>
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </div>
            
            {/* <ContactCard /> */}
        </>
    )
}

export default Home;
