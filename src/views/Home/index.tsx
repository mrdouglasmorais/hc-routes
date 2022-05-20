import React, { useRef, useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [ count, setCount ] = useState<number>(0);

  const prevCountRef = useRef<number>();

  useEffect(() => {
    prevCountRef.current = count;
  })

  const prevCount = prevCountRef.current;


  // uso do useRef


  return (
    <div>
      <h1>Home</h1>
      <h3>O valor do contador agora: {count}</h3>
      <h3>Valor do contador antes: {prevCount}</h3>
      <button onClick={() => setCount( count + 1 )} >
        Somar um ao contador
      </button>
    </div>
  )
}

export default Home;