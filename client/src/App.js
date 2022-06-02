import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { CssBaseline } from '@material-ui/core';
import { Navbar, Home, About, Services, Auth, Cars, Cart, Checkout, Footer, AHome, AAuth } from './components';
import { BrowserRouter, Routes, Route, Redirect, Navigate } from 'react-router-dom';

const App = () => {
    // const user = JSON.parse(localStorage.getItem('profile'));
    // const isAuthenticated = localStorage.getItem("isAuthenticated");
    // console.log("this", isAuthenticated);
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    // console.log(user);

    const fetchCars = async () => {
        const { data } = await commerce.products.list();

        setCars(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (carId, quantity) => {
        const { cart } = await commerce.cart.add(carId, quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (carId, quantity) => {
        const { cart } = await commerce.cart.update(carId, { quantity });

        setCart(cart);
    }

    const handleRemoveFromCart = async (carId) => {
        const { cart } = await commerce.cart.remove(carId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

    useEffect(() => {
        fetchCars();
        fetchCart();
    }, []);

    console.log(cars);
    console.log(cart);

    return (
        <BrowserRouter>

            <div>

                <CssBaseline />

                <Navbar totalItems={cart.total_items} handleEmptyCart={handleEmptyCart} cart={cart} setCart={setCart} />

                <Routes>

                    <Route path="/" exact element={<Home />} />

                    <Route path="/about" exact element={<About />} />

                    <Route path="/services" exact element={<Services />} />

                    <Route path="/auth" exact element={<Auth />} />

                    {/* <Route path="/auth" exact element={() => (!user  ? <Auth /> : <Navigate to="/cars" />  )} /> */}

                    <Route path="/cars" exact element={<Cars cars={cars} onAddToCart={handleAddToCart}/>} />

                    <Route path="/cars/cart" exact element={<Cart cart={cart} setCart={setCart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart}/>} /> 

                    <Route path="/checkout" exact element={<Checkout cart={cart} setCart={setCart} order={order} onCaptureCheckout={handleCaptureCheckout} refreshCart={refreshCart} error={errorMessage} />} />
                    
                    <Route path="/admin/auth" exact element={<AAuth />} />
                    
                    {/* <Route path="/admin/auth" exact element={() => (!admin ? <AAuth /> : <navigate to="/admin" /> )} /> */}

                    <Route path="/admin" exact element={<AHome />} />
                    
                </Routes>

                <Footer />

            </div>
            
        </BrowserRouter>
    )
}

export default App;
