import { actionsType } from "../constants/actions-type";

const initialState = {
    cartProduct: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsType.ADD_TO_CART:
            return { ...state, cartProduct: [...state.cartProduct, action.payload] };

        case actionsType.REMOVE_FROM_CART:
            return { ...state, cartProduct: state.cartProduct.filter(e => e.id !== action.payload) };

        default:
            return state;
    }
}