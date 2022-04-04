import React, { ChangeEvent, useEffect, useState } from "react";
import { BehaviorSubject, from } from "rxjs";
import { filter, mergeMap } from "rxjs/operators";


const getPokemonByName = async (name:string) => {
  const { results: allPokemons }:any = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1000").then(
    res=>res.json())
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

function Pokemons() {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState([])

  useObservable(searchResultObservable,setResults)

  const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log(e)
    setSearch(newValue);
    searchSubject.next(newValue)
  };

  return (
    <div className="App">
      <header className="App-header">
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

export default Pokemons;
