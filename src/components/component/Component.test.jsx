import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Component from './Component';

Enzyme.configure({ adapter: new Adapter() });

it('Simple ok test', () => {
  const component = shallow(<Component title="Ey" />);
  expect(component.text()).toContain('Ey');
});
