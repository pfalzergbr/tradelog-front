import { shallow } from 'enzyme';
import Landing from './Landing';
import React from 'react';

it('should render Landing Component', () => {
    expect(shallow(<Landing />)).toMatchSnapshot();
})