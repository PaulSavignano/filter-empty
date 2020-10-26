import React from 'react';

import './App.css';
import Pre from './Pre';
import filterEmpty from '../lib';

const obj = {
  level1: {
    level2: {
      level3: {
        key1: 'This value is fine',
        key2: null,
        key3: '',
        key4: 0,
        key5: (): void => console.log('function'),
      },
    },
  },
};

const arr = [{}, 'One', 'Two', {}];

function App(): React.ReactNode {
  return (
    <div className="App">
      <h1>Arrays</h1>
      <h3>Array To Filter</h3>
      <Pre json={arr} />
      <br />
      <h3>Filtered Array</h3>
      <Pre json={filterEmpty(arr)} />
      <h1>Objects</h1>
      <h3>Object To Filter</h3>
      <Pre json={obj} />
      <br />
      <h3>Filtered Object</h3>
      <Pre json={filterEmpty(obj)} />
    </div>
  );
}

export default App;
