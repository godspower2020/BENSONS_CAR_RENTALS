import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

import Car from './Car/Car';
import useStyles from './styles';

const Cars = ({ cars, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <Container>
                <Container className={classes.mBottom} align="center" maxWidth="md">
                    <Typography variant="h4" color="textPrimary">
                        Clean cars. Flexible bookings. Socially distant rental counters.
                    </Typography>
                    <Typography variant="h6" color="textSecondary" paragraph>
                        We’re working with our partners to keep you safe and in the driving seat.
                    </Typography>
                </Container>
                <div className={classes.toolbar}/>
                <Grid container justifyContent="center" spacing={4}>
                    {cars.map((car) => (
                        <Grid item key={car.id} xs={12} sm={6} md={4} lg={3}>
                            <Car car={car} onAddToCart={onAddToCart} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    )
}

export default Cars;
