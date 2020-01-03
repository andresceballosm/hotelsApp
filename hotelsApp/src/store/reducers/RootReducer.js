import { combineReducers } from 'redux'
import { ReducerLoading, ReducerCity } from './ReducerApp';
import { ReducerHotels } from './ReducerHotels';

export default(reducers = combineReducers({
    ReducerLoading,
    ReducerHotels,
    ReducerCity
}));