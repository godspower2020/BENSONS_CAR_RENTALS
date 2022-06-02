import React, { useState } from 'react'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, CardActionArea  } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import CarDetails from '../CarDetails/CarDetails';

import useStyles from './styles';

const Car = ({ car, onAddToCart }) => {
    const classes = useStyles();
    const [ openPopup, setOpenPopup ] = useState(false);

    return (
        <>
            <Card className={classes.root} raised elevation={6}>
                <CardActionArea onClick={() => setOpenPopup(true)}>
                    <CardMedia className={classes.media} image={car.image.url} title={car.name} />
                    <CardContent>
                        <div className={classes.cardContent}>
                            <Typography variant="h5" gutterBottom>
                                {car.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {car.price.formatted_with_symbol}
                            </Typography>
                        </div>
                        <Typography dangerouslySetInnerHTML={{ __html: car.description.substring(0, 80) + " ..." }} variant="body1" color="textSecondary">
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(car.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
            <CarDetails openPopup={openPopup} setOpenPopup={setOpenPopup} car={car} />
        </>
    )
}

export default Car;
