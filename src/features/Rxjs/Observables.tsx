import { Observable, from } from "rxjs";
import { useEffect, useState } from "react";
import styles from "./blog.module.css";
import Prism from "prismjs";
import "./prism.css"

function Observables() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const observable = new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 2000);
    });

    function foo() {
      console.log("Hello");
      return 42;
    }

    const x = foo();
    console.log(x);
    const y = foo();
    console.log(y);

    const fooObs = new Observable((subscriber) => {
      console.log("Hello");
      subscriber.next(42);
    });
    console.log("with foo from observable");
    fooObs.subscribe((x) => {
      console.log(x);
    });
    fooObs.subscribe((y) => {
      console.log(y);
    });

    console.log(
      "Functions can only return one value. Observables, can return several. Sync and Async"
    );
    const fooForSeveral = new Observable((subscriber) => {
      console.log("Hello");
      subscriber.next(42);
      subscriber.next(100); // "return" another value
      subscriber.next(200); // "return" yet another
    });

    console.log("before");
    fooForSeveral.subscribe((x) => {
      console.log(x);
    });
    console.log("after");

    const observableHi = new Observable(function subscribe(subscriber) {
      const id = setInterval(() => {
        subscriber.next("hi");
      }, 1000);
    });
    //observableHi.subscribe(x => console.log(x));

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

    return () => console.log("done");
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.h1}>Observable</h1>
        <p>
          An <strong>Observable</strong> is a lazily evaluated computation that
          can synchronously or asynchronously return zero to (potentially)
          infinite values from the time it's invoked onwards
        </p>
        <p>
          <strong>Example.</strong>The following is an Observable that pushes
          the values 1, 2, 3 immediately (synchronously) when subscribed, and
          the value 4 after one second has passed since the subscribe call, then
          completes:
        </p>
        <div style={{ color: "red" }}>{value}</div>
        <h3>Observables as generalizations of functions</h3>
        <p>
          Observables are like functions with zero arguments, but generalize
          those to allow multiple values. Subscribing to an Observable is
          analogous to calling a Function. Functions can only return one value.
          Observables, can return several. Sync and Async.
        </p>
        <p>
          <code>func.call()</code> means "give me one value sunchronously"
        </p>
        <p>
          <code>observable.subscribe()</code> means "give me any amount of
          values, either synchronously or asynchronously"
        </p>
        <h3>Anatomy of an Observable</h3>
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
          The <code>Observable</code> constructur takes one argument: the{" "}
          <strong>Subscribe</strong> function. Observables can be created with{" "}
          <code>new Observable</code>. Most commonly, observables are created
          using creation functions, like <code>of, from, interval</code>, etc.
        </p>
        <p>
          <strong>About lazyness</strong>This happens because both functions and
          Observables are lazy computations. If you don't call the function, the
          console.log('Hello') won't happen
        </p>

        <h3>Subscribing to Observables</h3>

        <p>
          Subscribing to an Observable is like calling a function, providing
          callbacks where the data will be delivered to
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
          then nothing else can be delivered afterwards
        </p>
        <h3>Disposing Observable Executions</h3>
        <p>
          When you subscribe, you get back a Subscription, which represents the
          ongoing execution. Just call unsubscribe() to cancel the execution.
        </p>
        <p>
          <strong>About lazyness</strong>This happens because both functions and
          Observables are lazy computations. If you don't call the function, the
          console.log('Hello') won't happen
        </p>
        <a href="https://rxjs.dev/guide/observable">link to official docs</a>
        <Code code={JSCode} language="javascript"/>
      </div>
    </div>
  );
}

export default Observables;

interface InterfaceSample {
  code: string;
  language: string;
}

function Code({ code, language }:InterfaceSample) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <h2> Code Syntax Block {language}</h2>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

const JSCode = `const App = props => {
  return (
    <div>
      <h1> Prism JS </h1>
      <div>Awesome Syntax Highlighter</div>
    </div>
  );
};
`;