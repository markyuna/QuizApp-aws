// src/components/__tests__/CustomButton.test.js
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CustomButton from '../components/CustomButton/CustomButton';

it('renders correctly', () => {
  const tree = renderer.create(<CustomButton onPress={() => {}} text="Press me" />).toJSON();
  expect(tree).toMatchSnapshot();
});
