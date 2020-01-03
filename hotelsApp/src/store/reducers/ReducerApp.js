import CONSTANTS from '../CONSTANSTS';

export const ReducerLoading = (state = { loading: false }, action) => {
    switch (action.type) {
        case CONSTANTS.SET_LOADING:
            return { loading: true };
        case CONSTANTS.STOP_LOADING:
            return { loading: false };   
        default:
            return state;
    }
}

export const ReducerCity = (state = { city: null }, action) => {
    switch (action.type) {
        case CONSTANTS.SET_CITY:
            return { city: action.city };
        default:
            return state;
    }
}