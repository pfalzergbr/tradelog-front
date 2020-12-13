import { shallow } from 'enzyme';
import Loading from './Loading';
import React from 'react';

it('should render Loading Component', () => {
    expect(shallow(<Loading />)).toMatchSnapshot();
})