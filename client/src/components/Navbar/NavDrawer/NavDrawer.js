import React from 'react';
import { Container, Drawer, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const NavDrawer = ({openDrawer, setOpenDrawer}) => {
    const classes = useStyles();

    return (
            <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            >
                <Container className={classes.drawer}>
                    <List>
                        <Link onClick={() => setOpenDrawer(false)} className={classes.link} to="/about">
                            <ListItem divider button>
                                <ListItemText>
                                        <Typography variant="body1" color="textSecondary">About</Typography>
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Link onClick={() => setOpenDrawer(false)} className={classes.link} to="/services">
                            <ListItem divider button>
                                <ListItemText>
                                        <Typography variant="body1" color="textSecondary">Services</Typography>
                                </ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                </Container>
        </Drawer>
    )
}

export default NavDrawer
