import "./App.css";
import Operators from "./features/Rxjs/Operators";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Observables from "./features/Rxjs/Observables";
import Observers from "./features/Rxjs/Observers";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/observables">Observable</Link>
          <Link to="/observers">Observers</Link>
          <Link to="/operators">Operators</Link>
        </nav>
        <Switch>
        <Route exact path="/observables" component={Observables} />
        <Route exact path="/observers" component={Observers} />
        <Route exact path="/operators" component={Operators} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

const Index = () => {
  return <div className="App">hello world</div>;
};
