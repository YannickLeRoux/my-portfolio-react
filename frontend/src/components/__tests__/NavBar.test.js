import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';

describe('NavBar', () => {
  it('renders without crashing', () => {
    shallow(<NavBar />);
  });

  it('renders a nav bar', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders 4 navigation items', () => {
    const nav = shallow(<NavBar />);
    expect((nav.find('li').length) === 4);
  });

});