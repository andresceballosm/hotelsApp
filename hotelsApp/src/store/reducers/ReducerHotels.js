import CONSTANTS from '../CONSTANSTS';

export const ReducerHotels = (state = { hotels: null }, action) => {
    switch (action.type) {
        case CONSTANTS.SET_HOTELS:
            return { hotels: action.hotels };  
        default:
            return state;
    }
}