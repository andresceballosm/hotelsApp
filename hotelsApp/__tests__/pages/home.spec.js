import React from 'react';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import HomeScreen from '../../src/pages/Home/HomeScreen';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });
const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
  preferences: {
    hotels: false,
  },
};

describe('Testing HomeScreen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
    <Provider store={mockStore(initialState)}>
      <HomeScreen /> 
    </Provider>,
      { context: { store: mockStore(initialState) } },
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});