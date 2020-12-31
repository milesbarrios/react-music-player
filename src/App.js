import React from 'react';

//components
import Player from './components/Player';
import Song from './components/Song'

//styles
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
