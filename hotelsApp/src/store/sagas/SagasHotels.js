import { call, takeEvery, put } from 'redux-saga/effects';
import { GET } from '../../services/Api'
import CONSTANTS from '../CONSTANSTS'
import { ActionSetHotelByParameter } from '../actions/ActionHotels';
import { ActionStopLoading } from '../actions/ActionApp';
import { showAlertError } from '../../components/Alerts';

const getHotels = (ref) => 
    GET(ref).then(stores => stores);

//Validate if value exist
function validateExpresion (expresion){
    try {
        return expresion ? true : false;
    } catch (error) {
        return false;  
    }
}

function* GetHotelsByParameter(data) {
        const { parameter, value, query } = data;
        let queryValid = validateExpresion(query);
    try {  
        //Build URL parameters 
        let ref = !queryValid ? `${'?'+parameter+'='+ value}` :
                                `${'?'+query[0].parameter+'='+ query[0].value + 
                                '&&' + query[1].parameter+'='+ query[1].value}`;
        const hotels = yield call(getHotels, ref);
        yield put(ActionSetHotelByParameter(hotels));
        yield put(ActionStopLoading());
    } catch (error) {
        showAlertError('Se ha ocacionado un error, intente más tarde.');
        console.log('eeror sagas', error);
    }
}

export const sagaHotel = [
    //take every listening to the dispatch
    takeEvery(CONSTANTS.GET_HOTELS_BY_PARAMETER, GetHotelsByParameter),
    takeEvery(CONSTANTS.GET_HOTELS_BY_PARAMETERS, GetHotelsByParameter)
]