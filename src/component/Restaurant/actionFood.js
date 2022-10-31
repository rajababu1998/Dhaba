import { Constant } from "../../redux/constants";

export const addFoodToCart = (foodItem) => {
    return {
        type: Constant.ADD_FOOD_TO_CART,
        payload: foodItem
    }
}

export const addRestDetails = (restDetails) => {
    return {
        type: Constant.ADD_REST_DETAILS,
        payload: restDetails
    }
}

export const emptyFoodFromCart = () => {
    return {
        type: Constant.EMPTY_FOOD_FROM_CART,
    }
}