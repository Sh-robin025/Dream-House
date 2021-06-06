import { actionsType } from "../constants/actions-type";

const initialState = {
    selectedProduct: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionsType.PRODUCT_DETAILS:
            return { ...state, selectedProduct: payload }

        default:
           return state;
    }
}