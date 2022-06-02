import { AAUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signinadmin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signInAdmin(formData);

        dispatch({ type: AAUTH, data });

        navigate('/admin');
    } catch (error) {
        console.log(error.response.data);
    }
};

export const signupadmin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUpAdmin(formData);

        dispatch({ type: AAUTH, data });

        navigate('/admin');
    } catch (error) {
        console.log(error.response.data);
    }
};

