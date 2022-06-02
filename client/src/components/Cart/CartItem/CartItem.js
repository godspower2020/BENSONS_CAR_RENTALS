import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContentContentFlex}>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="body1" color="textSecondary">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardContentContentFlex}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography variant="body2" color="textSecondary">{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <IconButton color="inherit" size="large" onClick={() => onRemoveFromCart(item.id)}>
                    <DeleteIcon color="secondary" fontSize="small" />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default CartItem
