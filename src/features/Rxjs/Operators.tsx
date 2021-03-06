import { fromEvent, of } from 'rxjs'
import { useEffect, useRef, useState } from "react";
import { map,first, delay } from 'rxjs/operators';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent'

function Operators() {
  const [value,setValue] = useState(0)
  
  useEffect(() => {
    of(1, 2, 3)
      .pipe(first())
      .subscribe((v) => setValue(v));

    console.log('just after subscribe');

    return () => console.log("done");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <InputBox/>
        <h1>Operators</h1>
        <p>Operators are functions</p>
        <p>A <strong>Pipeable operator</strong> is a function that takes an Observable as its input and returns another Observable. It is a pure operation: the previous Observable stays unmodified.</p>
      <p><strong>Creation Operators</strong> create new Observables</p>
      <h2>Marble diagrams</h2>
      <p>
      In a marble diagram, time flows to the right, and the diagram describes how values ("marbles") are emitted on the Observable execution.
      </p>
      </header>
    </div>
  );
}

export default Operators;


const InputBox = () => {
  const buttonEl = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (null==buttonEl.current) return
    const clicks = fromEvent<HTMLButtonElement>(buttonEl.current, 'click')
    const delayedClicks = clicks.pipe(delay(1000))
    const clicky = delayedClicks.subscribe(clickety =>
      console.log({ clickety })
    );

    return () => clicky.unsubscribe();
  }, []);

  return (
    <button ref={buttonEl} type="button">
      Deleayed clicks
    </button>
  );
};