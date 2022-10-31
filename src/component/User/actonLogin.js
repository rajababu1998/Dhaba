import { Constant } from "../../redux/constants";

export const setloginData = (loginData) => {
    return {
        type: Constant.SET_LOGIN_DATA,
        payload: loginData,
    }
}

export const setLogout = () => {
    return {
        type: Constant.SET_LOGOUT,
    }
}

export const setUrl = (url) => {
    return {
        type: Constant.SET_URL,
        payload: url
    }
}
// above we have created an action objects