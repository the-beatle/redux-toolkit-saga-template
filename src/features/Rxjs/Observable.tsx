import "./App.css";
import { Observable, from } from "rxjs";
import { useEffect, useState } from "react";

const observable = new Observable<number>(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
  }, 1000);
  setTimeout(() => {
    subscriber.next(48);
    subscriber.complete();
  }, 2000);
});

function InitialExample() {
  const [value,setValue] = useState(0)
  
  useEffect(() => {
    console.log('just before subscribe');
    observable.subscribe({
      next(x) { setValue(x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');

    return () => console.log("done");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        hello world!
        {value}
      </header>
    </div>
  );
}

export default InitialExample;
