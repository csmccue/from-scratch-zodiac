import React from 'react';
import './Main.css';
import { zodiacs } from '../../data';
import Zodiac from '../Zodiac/Zodiac';


export default function Main() {
  return <main>
    {zodiacs.map((zod) => ( 
      <Zodiac key = { zod.name } name = { zod.name } sign = { zod.sign } date = { zod.date } />
    ))}
  </main>;
}
