import configureMockStore from 'redux-mock-store';
import { ActionSetLoading, ActionStopLoading } from '../../../src/store/actions/ActionApp';

const mockStore = configureMockStore();

describe('Testing set Loading', () => {  
    const store = mockStore({});
  
    beforeEach(() => {
        store.clearActions();
    });
    
    it('start loading', async () => {
        await store.dispatch(ActionSetLoading());
        expect(store.getActions()).toMatchSnapshot();
    });
});

describe('Testing stop Loading', () => {  
    const store = mockStore({});
  
    beforeEach(() => {
        store.clearActions();
    });
    
    it('stop loading', async () => {
        await store.dispatch(ActionStopLoading());
        expect(store.getActions()).toMatchSnapshot();
    });
});
