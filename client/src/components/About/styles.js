import { makeStyles  } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    margin: {
        marginTop: '50px',
        backgroundColor: '#fff',
    },
    darkOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: '10',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
    },
    fullWidth: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    lowerZIndex: {
        zIndex: '-1',
    },
    middle: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
    }
}));