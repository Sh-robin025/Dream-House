import { actionsType } from "../constants/actions-type";

export const addToCart = product => {
    return {
        type: actionsType.ADD_TO_CART,
        payload: product,
    }
}