import { Observable, from } from "rxjs";
import { useEffect, useState } from "react";

function Observers() {
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
      <header>
        <h1>Observer</h1>
        <a href="https://rxjs.dev/guide/observer">link to official docs</a>
        <p>
          <strong>Observers</strong> are just objects with three callbacks, one
          for each type of notification that an Observable may deliver.
        </p>
        <ul>
          <li>Next</li>
          <li>error</li>
          <li>complete</li>
        </ul>
        <p>next callback as an argument</p>
        <code>
          {
            "observable.subscribe(x => console.log('Observer got a next value: ' + x));"
          }
        </code>
        <p>Observers in RxJS may also be partial. </p>
      </header>
    </div>
  );
}

export default Observers;
