import { FETCH_ALL, DELETE } from '../constants/actionTypes';

export default (users = [], action) => {
    switch (action.type) {
        case DELETE:
            return users.filter((user) => user._id !== action.payload);
        case FETCH_ALL:
            return action.payload;
        default:
            return users;
    }
}