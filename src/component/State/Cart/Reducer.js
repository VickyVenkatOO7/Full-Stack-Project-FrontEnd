import { LOGOUT } from "../Authentication/ActionType";
import * as actionType from "./ActionType";

const initialState = {
    cart: { items: [] },
    cartItems: [],
    loading: false,
    error: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FIND_CART_REQUEST:
        case actionType.GET_ALL_CART_ITEMS_REQUEST:
        case actionType.UPDATE_CARTITEM_REQUEST:
        case actionType.REMOVE_CARTITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }

        case actionType.FIND_CART_SUCCESS:
        case actionType.CLEAR_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                cartItems: action.payload.items,
            }

        case actionType.ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: [action.payload, ...state.cartItems],
            }

        case actionType.UPDATE_CARTITEM_SUCCESS:
            console.log("Current cartItems:", state.cartItems);
            console.log("Action payload:", action.payload);
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
            }

        case actionType.REMOVE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.filter((item) =>
                    item.id !== action.payload
                ),
            }

        case actionType.FIND_CART_FAILURE:
        case actionType.UPDATE_CARTITEM_FAILURE:
        case actionType.REMOVE_CARTITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case LOGOUT:
            localStorage.removeItem("jwt");
            return {
                ...state,
                cartItems: [],
                cart: null,
                success: "logout success"
            };

        default:
            return state;
    }
};

export default cartReducer;