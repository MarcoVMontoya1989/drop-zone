import { render } from '@testing-library/react';
import {shallow} from 'enzyme';

import App from '../App';
import NavbarComponent from "../Components/Component/Navbar.component";
import HomePageComponent from "../Components/Pages/HomePage.component";

const wrapper = shallow(<App />)

describe('', function () {
  test('Should render App component', () => {
    render(<App />);
  });

  test('It should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It should render child component Navbar', () => {
    expect(wrapper.containsMatchingElement(<NavbarComponent />)).toEqual(true);
  });

  test('It should render child component HomePageComponent', () => {
    expect(wrapper.containsMatchingElement(<HomePageComponent />)).toEqual(true);
  });

});