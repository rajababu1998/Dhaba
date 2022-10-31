import { combineReducers } from 'redux';
import { reducerLogin } from '../component/User/reducerLogin';
import { reducerFood } from '../component/Restaurant/reducerFood';

const reducers = combineReducers({
    login: reducerLogin,
    cart: reducerFood
})

export default reducers;