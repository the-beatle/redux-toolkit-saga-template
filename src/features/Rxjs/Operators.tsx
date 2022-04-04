import { fromEvent, of } from 'rxjs'
import { useEffect, useRef, useState } from "react";
import { map,first } from 'rxjs/operators';
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
        hello world!
        {value}
        <InputBox/>
      </header>
    </div>
  );
}

export default Operators;


const InputBox = () => {
  const buttonEl = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (null==buttonEl.current) return
    const clicky = fromEvent<HTMLButtonElement>(buttonEl.current, 'click').subscribe(clickety =>
      console.log({ clickety })
    );

    return () => clicky.unsubscribe();
  }, []);

  return (
    <button ref={buttonEl} type="button">
      Click Me
    </button>
  );
};