import {shallow} from "enzyme";
import {render, screen} from '@testing-library/react';
import NavbarComponent from "../../Components/Component/Navbar.component";

describe('Navbar Tests', function () {

  const wrapper = shallow(<NavbarComponent />);

  it('should render component', function () {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render text Drop Zone', function () {
    render(<NavbarComponent />);

    const DropText = screen.getByText('Drop');
    const ZoneText = screen.getByText('Zone');

    expect(DropText).toBeInTheDocument();
    expect(ZoneText).toBeInTheDocument();
  });
});
