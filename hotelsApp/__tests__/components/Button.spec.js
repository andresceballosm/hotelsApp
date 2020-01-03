import 'react-native';
import React from 'react' // Importante cargar React antes que react-test-renderer
import renderer from 'react-test-renderer';
import { LoadingSmall } from '../../src/components/LoadingSmall';
import { ButtonGeneral, ButtonBackDown } from '../../src/components/Button';

it('renders correctly', () => {
  const buttonGeneral = renderer.create(
    <ButtonGeneral />
  ).toJSON();
  
  expect(buttonGeneral).toMatchSnapshot();
});

it('renders correctly', () => {
    const buttonBackDown = renderer.create(
      <ButtonBackDown />
    ).toJSON();
    
    expect(buttonBackDown).toMatchSnapshot();
});