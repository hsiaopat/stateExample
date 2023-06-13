import React, { useState } from 'react';
import './style.css';
import ChildA from './ChildA';
import ChildB from './ChildB';

export default function App() {
  //es6 array destructuring to give you access to the state var and the state setter fxn
  const [showingChildA, setShowingChildA] = useState(true);

  const clickHandler = () => {
    setShowingChildA(!showingChildA);
  };
  return (
    <div>
      <button onClick={clickHandler}>Switch components</button>
      {showingChildA ? <ChildA /> : <ChildB />}
    </div>
  );
}
