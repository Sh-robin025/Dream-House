import { actionsType } from "../constants/actions-type";

export const userLogin = user => {
    return {
        type: actionsType.USER_LOGIN,
        payload: user,
    }
}

export const productDetails = product => {
    return {
        type: actionsType.PRODUCT_DETAILS,
        payload: product,
    }
}