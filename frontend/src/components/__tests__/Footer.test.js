import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders a footer component', () => {
    const wrapper = <Footer />;
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a 5 social icons', () => {
    const footer = shallow(<Footer />);
    expect((footer.find('svg').length) === 5);
  });

  it('renders an accurate copyright date', () => {
    const footer = shallow(<Footer />);
    const currentYear = (new Date()).getFullYear();
    expect(footer.find('.copyright').text()).toContain(currentYear);
  });

});