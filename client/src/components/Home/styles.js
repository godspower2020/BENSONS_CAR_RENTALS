import { makeStyles } from '@material-ui/core/styles';
// import LinearGradient from 'react-native-linear-gradient';

export default makeStyles((theme) => ({
  content: {
    margin: '50px 0',
    backgroundColor: '#fff',
    width: '100%',
  },
  noPadding: {
    padding: '0',
  },
  box1: {
    padding: theme.spacing(8, '4%'),
  },
  box2: {
    padding: theme.spacing(6, '0', 0, '0'),
  },
  grid2: {
    padding: theme.spacing(4, 0),
  },
  lostImg: {
    padding: theme.spacing(1, 0),
    // marginRight: theme.spacing(6),
    // border: '1px solid #ccc',
    // borderRadius: '5%',
    [theme.breakpoints.up('lg')]: {
      height: '270px',
    },
  },
  backgroundGrey: {
    backgroundColor: '#F3F6F9',
    [theme.breakpoints.up('lg')]: {
      marginRight: '-100px',
    },
    overflowX: 'hidden'
  },
  colorForGreyBackground: {
    color: '#2D3843',
  },
  black: {
    color: '#0A1929',
    fontSize: '48px',
    fontWeight: '750',
    lineHeight: '1.1142857142857143',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      fontSize: '68px',
      fontWeight: '750',
    },
  },
  blue: {
    color: '#0059B2',
  },
  homeButtoncolorPadding: {
    padding: theme.spacing(1.5),
    borderRadius: '12px',
  },
  marginBottom30: {
    marginBottom: '30px',
  },
  buttonText: {
    padding: theme.spacing(0, 2, 0, 0),
  },
  fontSize16: {
    fontSize16: '16px',
  },
  iconFont: {
    fontSize: '14px',
  },
  flex: {
    display: "flex", 
    justifyContent: "space-between",
  },
  flexStart: {
    display: "flex", 
    justifyContent: "flex-start",
  },
  lowercase: {
    textTransform: 'lowercase',
  }
}));