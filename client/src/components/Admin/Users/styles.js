import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    font: {
        fontSize: '14',
    },
    black: {
        backgroundColor: theme.palette.common.black,
    },
    white: {
        color: theme.palette.common.white,
    },
    red: {
        color: theme.palette.error.light,
    },
    interval: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
          // hide last border
          '&:last-child td, &:last-child th': {
            border: 0,
          },
    },
}));