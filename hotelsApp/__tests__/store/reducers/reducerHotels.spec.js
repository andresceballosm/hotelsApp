import configureMockStore from 'redux-mock-store';
import { ActionSetHotelByParameter } from '../../../src/store/actions/ActionHotels';

const mockStore = configureMockStore();

describe('Testing log in reducerHotels', () => {  
    const store = mockStore({});
  
    beforeEach(() => {
        store.clearActions();
    });
    const hotels = [
        { name : 'Hotel prueba' }
    ]
    it('service return hotels', async () => {
        await store.dispatch(ActionSetHotelByParameter(hotels));
        expect(store.getActions()).toMatchSnapshot();
    });
});
