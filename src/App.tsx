import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Cat } from './features/cats/Cats';
import './App.css';
import { useDispatch } from 'react-redux';
import { getCatsFetch } from './features/cats/catsSlice';
import {from} from "rxjs"

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getCatsFetch())
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <Cat/>
      </header>
    </div>
  );
}

export default App;
