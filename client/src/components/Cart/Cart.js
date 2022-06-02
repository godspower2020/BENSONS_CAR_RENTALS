import React from 'react';
import { Container, Typography, Button, Grid, Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddIcon  from '@material-ui/icons/Add';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, 
            <Link to="/cars" className={classes.link}> start adding some!</Link>
        </Typography>
    )

    const FilledCart = () => (
        <>
            <Container align="center" maxWidth="md">
                <Typography variant="h6" color="textSecondary" paragraph>
                    all cars in this checkout area can be increamented or decreamented, availability is not a problem. we are always ready to serve. to delete a car, simply click the delete button.
                </Typography>
            </Container>
            <Grid style={{marginTop: '50px'}} container spacing={10}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    SubTotal: <span className={classes.color}>{ cart.subtotal.formatted_with_symbol }</span>
                </Typography>
                <div className={classes.emptyCheckoutButtonFlex}>
                    <Button className={classes.emptyCheckoutButton} disabled={!cart} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button component={Link} to="/checkout" disabled={!cart} className={classes.emptyCheckoutButton} size="large" type="button" variant="outlined" color="primary">Checkout</Button>
                </div>
            </div>
            <br /><br />
            <Fab className={classes.float} component={Link} raised elevation={6} to="/cars" color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
        </>
    );

    if(!cart.line_items) return 'Loading...'

    return (
        <main className={classes.content}>
            <Container>
                    <Container className={classes.mTop} align="center" maxWidth="md">
                        <Typography variant="h4" color="textPrimary">
                        Your Shopping Cart 
                        </Typography>
                    </Container>
                { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </Container>
        </main>
    )
}

export default Cart;
