import 'react-native';
import React from 'react'
import renderer from 'react-test-renderer';
import StarRating from '../../src/components/StarRating';

it('renders correctly', () => {
  const starRating = renderer.create(
    <StarRating/>
  ).toJSON();
  
  expect(starRating).toMatchSnapshot();
});