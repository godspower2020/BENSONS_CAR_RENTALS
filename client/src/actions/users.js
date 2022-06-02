import { FETCH_ALL, DELETE } from '../constants/actionTypes';
import * as api from '../api';

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();

        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error)
    }
}