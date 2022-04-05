import { fromEvent, interval, of } from 'rxjs'
import { useEffect, useRef, useState } from "react";
import { map,first, delay } from 'rxjs/operators';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent'

function Subscriptions() {
  const [value,setValue] = useState(0)
  
  useEffect(() => {
  const observable1 = interval(400);
  const observable2 = interval(300);
  
  const subscription = observable1.subscribe(x => console.log('first: ' + x));
  const childSubscription = observable2.subscribe(x => console.log('second: ' + x));
  
  subscription.add(childSubscription);
  
  setTimeout(() => {
    // Unsubscribes BOTH subscription and childSubscription
    subscription.unsubscribe();
  }, 1000);

    return () => console.log("subscriptions done");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <p>
        A Subscription essentially just has an unsubscribe() function to release resources or cancel Observable executions.
      </p>
      <p>Subscriptions can also be put together, so that a call to an unsubscribe() of one Subscription may unsubscribe multiple Subscriptions.</p>
      </header>
    </div>
  );
}

export default Subscriptions;
