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
  shiftLeft: {
    position: 'relative',
    left: '-80px',
  },
  shiftLeftMore: {
    position: 'relative',
    left: '-95px',
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
  containerMargin: {
    margin: theme.spacing(3, 0, 3, 0),
  },
  padding:{
    padding: theme.spacing(8)
  },
  imagePadding:{
    padding: theme.spacing(2, 3)
  },
  flexStart: {
    display: "flex", 
    justifyContent: "flex-start",
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  darkBlue: {
    color: '#29376d'
  },
  lightBlue: {
    color: '#4895ff'
  },
  green: {
    color: '#3bb54a'
  },
  yellow: {
    color: '#f6b545'
  },
  fontSize24: {
    fontSize: '30px',
    fontWeight: '500',
  },
  grayColor: {
    color: '#0000008A',
  
  }
}));

// 29376d dark blue
// #4895ff light blue
// 3bb54a green
// f6b545 yellow