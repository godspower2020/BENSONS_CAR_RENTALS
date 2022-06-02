import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    margin: '100px 0',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  mBottom: {
    marginBottom: '80px',
  },
  root: {
    flexGrow: 1,
  },
}));