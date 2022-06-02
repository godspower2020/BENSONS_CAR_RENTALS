import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from '../../Auth/Icon';
import useStyles from '../../Auth/styles';
import Input from '../../Auth/Input';
import { signinadmin, signupadmin } from '../../../actions/aauth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const AAuth = () => {
    const classes = useStyles();
    const [ showPassword, setshowPassword ] = useState(false);
    const [ isSignUp, setIsSignUp ] = useState(false);
    const [ formData, setFormData ] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () => setshowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        
        if(isSignUp) {
            dispatch(signupadmin(formData, navigate));
        } else {
            dispatch(signinadmin(formData, navigate));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setshowPassword(false);
    }

    const googleSuccess = async (res) => {
        console.log(res);
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AAUTH', data: { result, token } });

            navigate('/admin');
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log("google Sign In was unsuccessful, try again later");
    };

    return (
        <div className={classes.content}>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">
                        {isSignUp ? 'sign up' : 'sign in'}
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {
                                isSignUp && (
                                    <>
                                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                        <Input name="lastName" label="last Name" handleChange={handleChange} half />
                                    </>
                                )
                            }
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label="password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            { 
                                isSignUp && 
                                    <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            }
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignUp ? 'sign up' : 'sign in'}</Button>
                        {/* <GoogleLogin 
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            render={(renderProps) => (
                                <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />}  variant="contained">Google Sign In</Button>
                            )} 
                            onSuccess={googleSuccess} 
                            onFailure={googleFailure} 
                            cookiePolicy="single_host_origin" />
                        <Grid container justifyContent="center">
                            <Grid item>
                                <p>
                                    { isSignUp ? "Already have an account? " : "Don't have an account? "}
                                    <Button className={classes.lowercaseblueColor} onClick={switchMode}>
                                        {isSignUp ? 'sign in' : 'sign Up'}
                                    </Button>
                                </p>
                            </Grid>
                        </Grid> */}
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default AAuth;
