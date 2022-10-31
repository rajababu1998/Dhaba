import { Constant } from "../../redux/constants";

const initialState = {
    foodCart: [],
    restDetails: {}
};
export const reducerFood = (state= initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case Constant.ADD_FOOD_TO_CART:
            let temp = [...state.foodCart, payload]
            return {...state, foodCart: temp}

        case Constant.ADD_REST_DETAILS:
            return {...state, restDetails: payload}

        case Constant.EMPTY_FOOD_FROM_CART: 
            return {...state, foodCart: []}
        default:
            return state
    }
}