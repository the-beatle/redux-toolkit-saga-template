import "./App.css";
import Operators from "./features/Rxjs/Operators";
import { HashRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import Observables from "./features/observables/Observables";
import Observers from "./features/Rxjs/Observers";
import Subscriptions from "./features/Rxjs/Subscriptions";
import Subjects from "./features/Rxjs/Subjects";
import MulticastedObservables from "./features/Rxjs/MulticastedObservables";
import BehaviorSubjects from "./features/Rxjs/BehaviorSubjects";
import ReplaySubjects from "./features/Rxjs/ReplaySubjects";
import AsyncSubjects from "./features/Rxjs/AsyncSubjects";
import Scheduler from "./features/Rxjs/Scheduler";

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="topnav">
        <li>
            <NavLink className="navLink" to="/">
              Rxjs
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/observables">
              Observable
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/observers">
              Observers
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/operators">
              Operators
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/subscriptions">
              Subscriptions
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/subjects">
              Subjects
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/multicasted-observables">
              Multicasted Observables
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/behaviorsubject">
              BehaviorSubject
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/replaySubject">
              Replaysubject
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/asyncsubject">
              AsyncSubject
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/scheduler">
              Scheduler
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Observables} />
          <Route exact path="/observables" component={Observables} />
          <Route exact path="/observers" component={Observers} />
          <Route exact path="/operators" component={Operators} />
          <Route exact path="/subscriptions" component={Subscriptions} />
          <Route exact path="/subjects" component={Subjects} />
          <Route
            exact
            path="/multicasted-observables"
            component={MulticastedObservables}
          />
          <Route exact path="/behaviorsubject" component={BehaviorSubjects} />
          <Route exact path="/replaySubject" component={ReplaySubjects} />
          <Route exact path="/asyncSubject" component={AsyncSubjects} />
          <Route exact path="/scheduler" component={Scheduler} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
