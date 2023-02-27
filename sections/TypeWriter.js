"use client";
import Typewriter from 'typewriter-effect';

export default function TypeWriter() {
  return (
    <div><Typewriter
    options={{
      strings: ['We invest in the world’s potential.'],
      autoStart: true,
      loop: true,
    }}
  /></div>
  )
}
