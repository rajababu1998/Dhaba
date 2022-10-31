import { Constant } from "../../redux/constants";

const initialObject = {};
export const reducerLogin = (state = initialObject, action) => {
    const {type, payload } = action;

    switch(type) {
        case Constant.SET_LOGIN_DATA:
            return {
                ...state, loginDataRedux: payload
            }
        case Constant.SET_LOGOUT:
            return {
                initialObject
            }
        case Constant.SET_URL:
            return {
                ...state, currentUrl: payload
            }
        default:
            return state
    }
}