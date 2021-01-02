import { shallow } from 'enzyme';
import NotFound from './NotFound';
import React from 'react';

it('should render NotFound Component', () => {
  expect(shallow(<NotFound />)).toMatchSnapshot();
});
