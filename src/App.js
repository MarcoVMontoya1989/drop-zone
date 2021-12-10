import './App.css';
import './styles/Base.scss';
import 'bulma/css/bulma.min.css';
import HomePageComponent from "./Components/Pages/HomePage.component";

function App() {
  return (
    <div className="main">
      <HomePageComponent />
      <div className="buttons">
        <button className="button is-success is-small">Small</button>
        <button className="button is-warning is-medium">Medium</button>
        <button className="button is-danger is-large">Large</button>
      </div>
    </div>
  );
}

export default App;
