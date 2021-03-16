// import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import React from 'react';
import Navbar from './Navbar';

const navbar = create(<Navbar />);

it('expect to render the Navbar component', () => {
  expect(navbar.toJSON()).toMatchSnapshot();
});
