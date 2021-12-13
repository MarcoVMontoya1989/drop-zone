import './App.css';
import './styles/Base.scss';
import 'bulma/css/bulma.min.css';
import HomePageComponent from "./Components/Pages/HomePage.component";
import {Fragment} from "react";
import NavbarComponent from "./Components/Component/Navbar.component";

function App() {
  return (
    <Fragment>
      <section className="hero is-fullheight is-default">
        <div className="hero-head head-mobile">
          <NavbarComponent/>
        </div>

        <div className="hero-body">
          <HomePageComponent/>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
