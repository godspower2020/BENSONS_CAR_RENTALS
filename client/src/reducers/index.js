import { combineReducers } from 'redux';

import users from './users';
import aauth from './aauth';
import auth from './auth';

export default combineReducers({ users, aauth, auth });