import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';

it('renders renders as intended', () => {
    const wrapper = renderer.create(<App />).toJSON();
    expect(wrapper).toMatchSnapshot();
});
