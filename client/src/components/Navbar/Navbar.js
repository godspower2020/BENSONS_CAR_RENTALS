import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Avatar, Button, IconButton, Badge, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ShoppingCart } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';

import logo from '../../images/logo.png';
import useStyles from './styles';
import NavDrawer from './NavDrawer/NavDrawer';

const Navbar = ({ totalItems, handleEmptyCart }) => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('adminProfile')));
    
    console.log(user);
    console.log(admin);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    // user logout
    const logout = (res) => {
        dispatch({ type: 'LOGOUT' });
        
        navigate('/')

        handleEmptyCart();

        setUser(null);
    };

    // admin logout
    const alogout = () => {
        dispatch({ type: 'ALOGOUT' });

        navigate('/admin/auth')

        setAdmin(null);
    };
 
    // user when signed-in/signed-up is directed to referred page and avatar is shown automatically
    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    // admin when signed-in/signed-up is directed to referred page and avatar is shown automatically
    useEffect(() => {
        const token = admin?.token;

        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) alogout();
        }

        setAdmin(JSON.parse(localStorage.getItem('adminProfile')));
    }, [location]);

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    {user || admin ? (
                        <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="power.js" height="25px" className={classes.image}/>
                        Daniel.js
                    </Typography>
                    ) : (
                        <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="power.js" height="25px" className={classes.image}/>
                        Daniel.js
                    </Typography>
                    )}
                    <div className={classes.grow} />
                    {location.pathname === '/cars' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cars/cart" aria-label="show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                    {user || admin ? (
                        <div className={`${classes.userProfileMenuFlex} ${classes.userProfileNoUserMenuFlexes}`}>
                            <Avatar className={classes.purple} alt={user ? user.result.name : admin.result.name} src={user ? user.result.imageUrl : admin.result.imageUrl}>{user ? user.result.name.charAt(0) : admin.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="body2" color="primary">{user ? user.result.name : admin.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={user ? logout : alogout}>Logout</Button>
                        </div>
                    ) : (
                        <>
                            <div className={classes.userProfileNoUserMenuFlexes}>
                                {(location.pathname === '/' || location.pathname === '/about' || location.pathname === '/services') && (
                                    <div className={`${classes.menuFlex} ${classes.userProfileNoUserMenuFlexes}`} >
                                        <Link to="/about" className={classes.link}>
                                            <Typography className={classes.noDisplayOnSmall} variant="body1" color="textSecondary">About</Typography>
                                        </Link>
                                        <Link to="/services" className={classes.link}>
                                            <Typography className={classes.noDisplayOnSmall} variant="body1" color="textSecondary">Services</Typography>
                                        </Link>
                                    </div>
                                )}
                                {(location.pathname !== '/auth' && location.pathname !== '/admin/auth') && (
                                    <Button className={classes.lowercase} component={Link} to="/auth" variant="contained" color="primary">start now</Button>
                                )}
                                {(location.pathname === '/' || location.pathname === '/about' || location.pathname === '/services') && (
                                    <div onClick={() => setOpenDrawer(true)} className={classes.moreVertMarginLeft}>
                                        <IconButton className={classes.noPadding} color="inherit">
                                            <MoreVertIcon fontSize="medium" />
                                        </IconButton>
                                    </div> 
                                )}
                            </div>
                        </>
                    )}
                </Toolbar> 
                <NavDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            </AppBar>
        </>
    )
}

export default Navbar


