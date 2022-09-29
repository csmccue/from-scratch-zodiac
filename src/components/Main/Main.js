import React from 'react';
import './Main.css';
import { zodiacs } from '../../data';
import Zodiac from '../Zodiac/Zodiac';
import universe from '../../universe.jpg';



export default function Main() {
  return <main style = {{ backgroundImage: `url(${universe})` }}>
    {zodiacs.map((zod) => ( 
      <Zodiac key = { zod.name } name = { zod.name } sign = { zod.sign } date = { zod.date } />
    ))}
  </main>;
}
