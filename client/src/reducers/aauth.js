import { AAUTH, ALOGOUT } from '../constants/actionTypes';

const aAuthReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AAUTH:
            localStorage.setItem('adminProfile', JSON.stringify({ ...action?.data }));

            return { ...state, authData: action?.data };
        case ALOGOUT:
            localStorage.clear();

            return { ...state, authData: null };
        default:
            return state;
    }
};

export default aAuthReducer;