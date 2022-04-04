import "./App.css";
import { interval, from } from "rxjs";
import { useEffect, useState } from "react";
import Operators from "./features/Rxjs/Operators";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

const observable = interval(1000);

function App() {
  const [value, setValue] = useState(0);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

const Index = () => {
  return <div className="App">hello world</div>;
};
