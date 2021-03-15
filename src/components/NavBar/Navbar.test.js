import { shallow } from 'enzyme';
import React from 'react';
import Navbar from './Navbar';

it('expect to render the Stats component', () => {
  expect(shallow(<Navbar />).length).toEqual(1);
});
