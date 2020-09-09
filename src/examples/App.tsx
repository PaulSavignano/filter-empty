import React from 'react'

import './App.css'
import filterEmpty from '../lib'

const obj = {
  level1: {
    level2: {
      level3: {
        key1: 'This value is fine',
        key2: null,
        key3: '',
        key4: 0,
      },
    },
  },
}

const arr = [{}, 'One', 'Two', {}]

function App() {
  return (
    <div className="App">
      <h1>Arrays</h1>
      <h3>Array To Filter</h3>
      <pre>{JSON.stringify(arr, null, 2)}</pre>
      <br />
      <h3>Filtered Array</h3>
      <pre>{JSON.stringify(filterEmpty(arr), null, 2)}</pre>
      <h1>Objects</h1>
      <h3>Object To Filter</h3>
      <pre>{JSON.stringify(obj, null, 2)}</pre>
      <br />
      <h3>Filtered Object</h3>
      <pre>{JSON.stringify(filterEmpty(obj), null, 2)}</pre>
    </div>
  )
}

export default App
