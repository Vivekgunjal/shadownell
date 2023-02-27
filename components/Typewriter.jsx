'use client';

import { useState, useEffect } from 'react';

const Typewriter = ({ text, scrollToView, containerRef }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, index));
      setIndex((prevIndex) => prevIndex + 1);
    }, 30);

    return () => clearInterval(intervalId);
  }, [text, index]);

  return (
    <h1>{displayText}</h1>
  );
};

export default Typewriter;