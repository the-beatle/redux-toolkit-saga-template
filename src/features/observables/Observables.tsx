import { Observable, from, fromEvent } from "rxjs";
import { useEffect, useRef, useState } from "react";
import styles from "./observables.module.css";
import "../assets/css/prism.css";
import Code from "../scripts/Code";

const observable = new Observable<number>((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 2000);
});


function Observables() {
  const [value, setValue] = useState(0);

  const onclick = () => {
    observable.subscribe({
      next(x) {
        setValue(x);
      },
      error(err) {
        console.error("something wrong occurred: " + err);
      },
      complete() {
        console.log("done");
      },
    });
  };

  return (
      <div className={styles.container}>
        <h1>Observable</h1>
        <p>
          An <strong>Observable</strong> is a lazily evaluated computation that
          can synchronously or asynchronously return zero to (potentially)
          infinite values from the time it's invoked onwards
        </p>
        <div className={styles.note}>
        <h4>About Lazyness</h4>
        <p>
          This happens because both functions and Observables are lazy
          computations. If you don't call the function, the console.log('Hello')
          won't happen
        </p>
        </div>

        <p>
          <strong>Example.</strong>The following is an Observable that pushes
          the values 1, 2, 3 immediately (synchronously) when subscribed, and
          the value 4 after one second has passed since the subscribe call, then
          completes.
        </p>
        <p>
          <Code code={ObservableCode} language="javascript" />        
        </p>
        <button onClick={onclick}>click to run or reload code</button>
        <div className={styles.output}>
          <div>{`Got value ${value}`}</div>
        </div>
        <h2>Observables as generalizations of functions</h2>
        <p>
          Observables are like functions with zero arguments, but generalize
          those to allow multiple values. Subscribing to an Observable is
          analogous to calling a Function. Functions can only return one value.
          Observables, can return several.{" "}
          <i>
            <strong>Sync and Async.</strong>
          </i>
        </p>
        <ul >
          <li>
            <code>func.call()</code> means "give me one value synchronously".
          </li>
          <li>
            <code>
              observable.subscribe(<i>observer</i>)
            </code>{" "}
            means "give me any amount of values, either synchronously or
            asynchronously".
          </li>
        </ul>

        <h2>Anatomy of an Observable</h2>
        <ul>
          <li>
            <strong>Creating</strong> Observables
          </li>
          <li>
            <strong>Subscribing</strong> to Observables
          </li>
          <li>
            <strong>Executing</strong> The Observable
          </li>
          <li>
            <strong>Disposing</strong> Observables
          </li>
        </ul>

        <h3>Creating Observables</h3>
        <p>
          The <code>Observable</code> constructor takes one argument, the{" "}
          <strong>Subscribe</strong> function. Observables can be created with{" "}
          <code>new Observable</code>. Most commonly, observables are created
          using creation functions, like <code>of, from, interval</code>, etc.
        </p>

        <h3>Subscribing to Observables</h3>
        <p>
          Subscribing to an Observable is like calling a function, providing
          callbacks where the data will be delivered to.
        </p>
        <h3>Executing Observables</h3>
        <p>
          There are three types of values an observable execution can deliver
        </p>
        <ul>
          <li>Next</li>
          <li>Error</li>
          <li>Complete</li>
        </ul>

        <p>
          In an Observable Execution, zero to infinite Next notifications may be
          delivered. If either an Error or Complete notification is delivered,
          then nothing else can be delivered afterwards.
        </p>
        <h3>Disposing Observable Executions</h3>
        <p>
          When you subscribe, you get back a Subscription, which represents the
          ongoing execution. Just call unsubscribe() to cancel the execution.
        </p>

        <a href="https://rxjs.dev/guide/observable">link to official docs</a>
      </div>
  );
}

export default Observables;

const ObservableCode = `import { Observable } from 'rxjs';
 
const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});
 
console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');
`;