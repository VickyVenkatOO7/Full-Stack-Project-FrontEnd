import * as actionType from "./ActionType";

const intialState = {
    restaurants: [],
    usersRestaurant: null,
    restaurant: null,
    loading: false,
    error: null,
    events: [],
    restaurantsEvents: [],
    categories: [],
};

const restaurantReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.CREATE_RESTAURANT_REQUEST:
        case actionType.GET_ALL_RESTAURANTS_REQUEST:
        case actionType.DELETE_RESTAURANT_REQUEST:
        case actionType.UPDATE_RESTAURANT_REQUEST:
        case actionType.GET_RESTAURANT_BY_ID_REQUEST:
        case actionType.CREATE_CATEGORY_REQUEST:
        case actionType.GET_RESTAURANTS_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case actionType.CREATE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.payload,
            };

        case actionType.GET_ALL_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.payload,
            };

        case actionType.GET_RESTAURANT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurant: action.payload,
            };

        case actionType.GET_RESTAURANT_BY_USER_ID_SUCCESS:
        case actionType.UPDATE_RESTAURANT_STATUS_SUCCESS:
        case actionType.UPDATE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                usersRestaurant: action.payload,
            };

        case actionType.DELETE_RESTAURANT_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                restaurants: state.restaurants.filter(
                    (item) => item.id !== action.payload
                ),
                usersRestaurant: state.usersRestaurant.filter(
                    (item) => item.id !== action.payload
                ),
            };

        case actionType.CREATE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: [...state.events, action.payload],
                restaurantsEvents: [...state.restaurantsEvents, action.payload]
            };

        case actionType.GET_ALL_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: action.payload,
            };

        case actionType.GET_RESTAURANTS_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurantsEvents: action.payload,
            };

        case actionType.DELETE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: state.events.filter((item) => item.id !== action.payload),
                restaurantsEvents: state.restaurantsEvents.filter(
                    (item) => item.id !== action.payload),
            };

        case actionType.CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: [...state.categories, action.payload],
            };

        case actionType.GET_RESTAURANTS_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload,
            };
        
        case actionType.CREATE_RESTAURANT_FAILURE:
        case actionType.GET_ALL_RESTAURANTS_FAILURE:
        case actionType.DELETE_RESTAURANT_FAILURE:
        case actionType.UPDATE_RESTAURANT_FAILURE:
        case actionType.GET_RESTAURANT_BY_ID_FAILURE:
        case actionType.CREATE_EVENTS_FAILURE:
        case actionType.CREATE_CATEGORY_FAILURE:
        case actionType.GET_RESTAURANTS_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default restaurantReducer;