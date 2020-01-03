import 'react-native';
import React from 'react' // Importante cargar React antes que react-test-renderer
import renderer from 'react-test-renderer';
import { LoadingSmall } from '../../src/components/LoadingSmall';

it('renders correctly', () => {
  const loading = renderer.create(
    <LoadingSmall />
  ).toJSON();
  
  expect(loading).toMatchSnapshot();
});