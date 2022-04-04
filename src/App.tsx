import "./App.css";
import { interval, from } from "rxjs";
import { useEffect, useState } from "react";
import Operators from "./features/Rxjs/Operators";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Observables from "./features/Rxjs/Observables";

function App() {
  const [value, setValue] = useState(0);

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/observables">Observable</Link>
        </nav>
        <Switch>
          <Route exact path="/observables" component={Observables} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

const Index = () => {
  return <div className="App">hello world</div>;
};
