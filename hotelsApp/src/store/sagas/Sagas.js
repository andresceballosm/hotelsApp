import { all } from 'redux-saga/effects'
import { sagaHotel } from './SagasHotels'

export default function* rootSaga() {    
    yield all([
      ...sagaHotel
    ])
};