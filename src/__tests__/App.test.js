import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

it('renders renders as intended', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});
