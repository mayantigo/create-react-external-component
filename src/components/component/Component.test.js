import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Component from './Component';

it('CheckboxWithLabel changes the text after click', () => {
  const component = shallow(<Component title="Ey" />);
  expect(component.text()).toContain('Ey');
});