import { makeStyles, alpha  } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  lowercase: {
    textTransform: 'lowercase',
  },
  logout: {
    textTransform: 'lowercase',
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '16px',
    },
  },
  moreVertMarginLeft: {
    marginLeft: '20px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  noPadding: {
    padding: '0',
  },
  purple: {
    height: '24px',
    width: '24px',
    fontSize: '14px',
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginRight: '10px',
  },
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    marginBottom: '60px',
  },
  userProfileMenuFlex: {
    width: '140px',
    [theme.breakpoints.up('md')]: {
      width: '280px',
    },
  },
  menuFlex: {
    marginRight: '60px',
  },
  userProfileNoUserMenuFlexes: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noDisplayOnSmall: {
    marginRight: '30px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  userName: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    padding: '0 20px',
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    paddingLeft: '10px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '0',
    },
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));