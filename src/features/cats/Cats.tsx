import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppSelector, useAppDispatch } from '../../app/hooks';


export function Cat() {
  const {cats} = useSelector((state: any) => state.cats)
  
  return (
    <ul>
      <h1>Cats</h1>
        {cats && cats.map((cat:any)=>{
          return(<li key={cat.id}>{cat.name}</li>)
        })}
    </ul>
  );
}