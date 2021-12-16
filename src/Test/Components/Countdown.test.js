import {shallow} from "enzyme";
import {render, screen} from '@testing-library/react';

import CountdownComponent from "../../Components/Component/Countdown.component";
import Countdown from "react-countdown";

const wrapper = shallow(<CountdownComponent />);

describe('Countdown Tests', () => {
  it('should render component', () => {
    const CountdownRenderer = render(<CountdownComponent />);
    expect(CountdownRenderer).toMatchSnapshot();
  });

  it('should render Countdown timer library in the component', () => {
    expect(wrapper.containsMatchingElement(<Countdown />)).toEqual(true);
    
  });
});