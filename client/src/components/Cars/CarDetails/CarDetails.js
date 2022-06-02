import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, CardMedia, DialogContentText, DialogTitle, IconButton, Slide, SlideDialogue, Paper, Box, Typography, Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';

const CarDetails = ({ car, openPopup, setOpenPopup }) => {
    const classes = useStyles();

  return (
    <div>
      <Dialog classes={{ paper: classes.dialogWrapper }}
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"maxWidth='md'
      >
        <div className={classes.flexSpaceBetween} align="center">
          <div className={classes.flexSpaceBetween}>
            <DialogTitle id="alert-dialog-title">
              <Typography variant="h5">{car.name}</Typography>
            </DialogTitle>
            <Typography variant="body2" color="textSecondary">
              <small>
                {car.price.formatted_with_symbol}
              </small>
            </Typography>
          </div>
          <IconButton className={classes.padding} color="inherit" onClick={() => setOpenPopup(false)}><CloseIcon color="secondary" /></IconButton>
        </div>
        <DialogContent className={`${classes.flexSpaceBetween} ${classes.flexSpaceBetweenChangeOnSmall} ${classes.paddingTenLeftRight}`} dividers>
          <img className={classes.media} src={car.image.url} alt="random-img" />
          <DialogContentText id="alert-dialog-description" className={classes.left} dangerouslySetInnerHTML={{ __html: car.description }} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CarDetails;

