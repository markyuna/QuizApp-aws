// src/components/__tests__/CardHeader.test.js
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CardHeader from '../components/CardHeader';

it('renders correctly', () => {
  const tree = renderer.create(<CardHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
