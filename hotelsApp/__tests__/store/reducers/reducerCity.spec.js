import configureMockStore from 'redux-mock-store';
import { ActionSetCity } from '../../../src/store/actions/ActionApp';

const mockStore = configureMockStore();

describe('Testing log in reducerCity', () => {  
    const store = mockStore({});
  
    beforeEach(() => {
        store.clearActions();
    });
    
    it('set city in state', async () => {
        await store.dispatch(ActionSetCity('Bogota'));
        expect(store.getActions()).toMatchSnapshot();
    });
});
