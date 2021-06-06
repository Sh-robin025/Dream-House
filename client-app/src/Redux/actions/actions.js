import { actionsType } from "../constants/actions-type";

export const productDetails = product => {
    return {
        type: actionsType.PRODUCT_DETAILS,
        payload: product,
    }
}