import React, {useState} from 'react';
import Data from './Data';

//components
import Player from './components/Player';
import Song from './components/Song'

//styles
import './styles/app.scss';

function App() {
  //state
  const [songs, setSongs] = useState(Data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player />
    </div>
  );
}

export default App;
