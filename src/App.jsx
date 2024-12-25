// App.jsx
import React from 'react';
import Grid from './Grid';

function App() {
  return (
    <div style={{ padding: '20px', justifyContent: 'center' }}>
      <Grid numRows={2} numCols={4} />
    </div>
  );
}

export default App;
