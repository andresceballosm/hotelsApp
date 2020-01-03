import CONSTANTS from '../CONSTANSTS';

export const ActionGetHotelByParameter = (parameter, value) => ({
    type: CONSTANTS.GET_HOTELS_BY_PARAMETER,
    parameter, value
});

export const ActionSetHotelByParameter = (hotels) => ({
    type: CONSTANTS.SET_HOTELS,
    hotels
});

export const ActionGetHotelByParameters = (query) => ({
    type: CONSTANTS.GET_HOTELS_BY_PARAMETERS,
    query
});



