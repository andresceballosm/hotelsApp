import CONSTANTS from '../CONSTANSTS';

export const ActionSetLoading = () => ({
    type: CONSTANTS.SET_LOADING,
});

export const ActionStopLoading = () => ({
    type: CONSTANTS.STOP_LOADING,
});

export const ActionSetCity = (city) => ({
    type: CONSTANTS.SET_CITY,
    city
});