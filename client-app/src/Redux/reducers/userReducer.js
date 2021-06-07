import { actionsType } from "../constants/actions-type";

const initialState = {}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionsType.USER_LOGIN:
            return { ...state, loggedInUser: payload }

        default:
            return state;
    }
}