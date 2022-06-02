import React from 'react'

import google from '../../images/google.png';
import useStyles from './styles';

const Icon = () => {
    const classes = useStyles();

    return (
        <>
          <img src={google} alt="google logo" height="20px" className={classes.image}/>  
        </>
    )
}

export default Icon
