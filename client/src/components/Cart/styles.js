import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    margin: '100px 0',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  color: {
    color: '#0000008A',
    fontSize: '20px',
  },
  mTop: {
    marginTop: '10px',
  },
  title: {
    marginTop: '5%',
  },
  emptyCheckoutButton: {
    minWidth: '100px',
    textTransform: 'lowercase',
    margin: theme.spacing(4, 2, 0, 0),
    [theme.breakpoints.up('sm')]: {
      minWidth: '150px',
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 0, 0, 5),
    },
  },
  link: {
    textDecoration: 'none',
  },
  emptyCheckoutButtonFlex: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10%',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  float: {
    position: 'sticky',
    float: 'right',
    right: '1px',
    bottom: '50px',
    [theme.breakpoints.up('sm')]: {
      right: '50px',
      bottom: '50px',
    },
  }
}));