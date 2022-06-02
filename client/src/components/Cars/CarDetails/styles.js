import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

export default makeStyles((theme) => ({
  dialogWrapper: {
    width: '940px',
    Height: '400px'
  },
  flexSpaceBetween: {
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: 'center',
  },
  padding: {
    margin: '0 24px'
  },
  flexSpaceBetweenChangeOnSmall: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  paddingTenLeftRight: {
    padding: '0 10px',
  },
  media: {
    paddingRight: theme.spacing(4),
    width: '100%', 
    padding: '0 40px'
  },
  left: {
    paddingLeft: theme.spacing(4),
  }
}));