import { Observable, from } from "rxjs";
import { useEffect, useState } from "react";


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
      console.log('Hello');
      return 42;
    }

    const x = foo();
    console.log(x);
    const y = foo(); 
    console.log(y);

    const fooObs = new Observable(subscriber => {
      console.log('Hello');
      subscriber.next(42);
    });
    console.log("with foo from observable")
    fooObs.subscribe(x => {
      console.log(x);
    });
    fooObs.subscribe(y => {
      console.log(y);
    });

    console.log("Functions can only return one value. Observables, can return several. Sync and Async")
    const fooForSeveral = new Observable(subscriber => {
      console.log('Hello');
      subscriber.next(42);
      subscriber.next(100); // "return" another value
      subscriber.next(200); // "return" yet another
    });
    
    console.log('before');
    fooForSeveral.subscribe(x => {
      console.log(x);
    });
    console.log('after');


    const observableHi = new Observable(function subscribe(subscriber) {
      const id = setInterval(() => {
        subscriber.next('hi')
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
        <h1>Observable</h1>
        <h2>Contents</h2>
        <p>Pull vs Push</p>
        <a href="https://rxjs.dev/guide/observable">link to official docs</a>
        <p><strong>Example.</strong>The following is an Observable that pushes the values 1, 2, 3 immediately (synchronously) when subscribed, and the value 4 after one second has passed since the subscribe call, then completes:</p>
        <div>{value}</div>
        <p><strong>What is push?</strong> In Push systems, the Producer determines when to send data to the Consumer. The Consumer is unaware of when it will receive that data</p>
        <p>An <strong>Observable</strong> is a lazily evaluated computation that can synchronously or asynchronously return zero to (potentially) infinite values from the time it's invoked onwards</p>
      <h2>Observables as generalizations of functions</h2>
      <p>Observables are like functions with zero arguments, but generalize those to allow multiple values.</p>
      <p>Subscribing to an Observable is analogous to calling a Function.</p>
      <p>Functions can only return one value. Observables, can return several. Sync and Async</p>
      <p>
        <code>func.call()</code> means "give me one value sunchronously"
      </p>
      <p>
        <code>obsrvable.subscribe()</code> means "give me any amnount of values, either synchronously r asynchronously"
      </p>
      <h4>Anatomy of an Observable</h4>
      <ul>
        <li><strong>Creating</strong> Observables</li>
        <li><strong>Subscribing</strong> to Observables</li>
        <li><strong>Executing</strong> The Observable</li>
        <li><strong>disposing</strong> Observables</li>
      </ul>
      
      <h1>Creating Observables</h1>
      The <code>Observable</code> constructur takes one argument: the <strong>Subscribe</strong> function
      <p>Observables can be created with <code>new Observable</code>. Most commonly, observables are created using creation functions, like <code>of, from, interval</code>, etc.</p>
      <p><strong>About lazyness</strong>This happens because both functions and Observables are lazy computations. If you don't call the function, the console.log('Hello') won't happen</p>

      <h1>Subscribing to Observables</h1>
      
      <p>Subscribing to an Observable is like calling a function, providing callbacks where the data will be delivered to</p>

      <h1>Executing Observables</h1>
      
      <p>There are three types of values an observable execution can deliver</p>
      <ul>
        <li>Next</li>
        <li>Error</li>
        <li>Complete</li>
      </ul>

      <p>In an Observable Execution, zero to infinite Next notifications may be delivered. If either an Error or Complete notification is delivered, then nothing else can be delivered afterwards</p>
      <h1>Disposing Observable Executions</h1>
      <p>When you subscribe, you get back a Subscription, which represents the ongoing execution. Just call unsubscribe() to cancel the execution.</p>

      <p><strong>About lazyness</strong>This happens because both functions and Observables are lazy computations. If you don't call the function, the console.log('Hello') won't happen</p>
      </header>
    </div>
  );
}

export default Observables;
