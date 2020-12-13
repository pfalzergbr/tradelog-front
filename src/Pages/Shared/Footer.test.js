import { shallow } from 'enzyme';
import Footer from './Footer';
import React from 'react';

it('should render Footer Component', () => {
    expect(shallow(<Footer />)).toMatchSnapshot();
})