import React, { useEffect, useState } from "react";
import { Cat } from "./features/cats/Cats";
import "./App.css";
import { useDispatch } from "react-redux";
import { getCatsFetch } from "./features/cats/catsSlice";
import { BehaviorSubject, from } from "rxjs";
import { map, filter, delay, mergeMap } from "rxjs/operators";
import { debounceTime } from "rxjs-compat/operator/debounceTime";
import { distinctUntilChanged } from "rxjs-compat/operator/distinctUntilChanged";


const getPokemonByName = async (name:any) => {
  const { results: allPokemons }:any = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1000").then(
    res=>res.json())
  console.log(allPokemons)
  return allPokemons.filter((pokemon:any) => pokemon.name.includes(name));
};

let searchSubject = new BehaviorSubject("");

let searchResultObservable = searchSubject.pipe(
  filter(val=>val.length>1),
  mergeMap(val=>from(getPokemonByName(val)))
)

const useObservable = (observable: any, setter: any) => {
  useEffect(() => {
    let subscription = observable.subscribe((result: any) => {
      setter(result);
    });
    return () => subscription.unsubscribe();
  }, [observable, setter]);
};

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([])

  useObservable(searchResultObservable,setResults)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  });

  const handleSearchChange = (e:any) => {
    const newValue = e.target.value;
    setSearch(newValue);
    searchSubject.next(newValue)
  };

  return (
    <div className="App">
      <header className="App-header">
        <Cat />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
        />
      </header>
      {JSON.stringify(results,null,2)}
    </div>
  );
}

export default App;
