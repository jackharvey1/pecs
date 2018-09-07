import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import 'jest-enzyme';

jest.mock('./assets', () => ({
    image1: 'image1.jpg',
    image2: 'image2.jpg',
    image3: 'image3.jpg',
}));

configure({ adapter: new Adapter() });
