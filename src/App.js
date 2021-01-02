import React, {useState} from 'react';
import Data from './Data';

//components
import Player from './components/Player';
import Song from './components/Song'
import Library from './components/Library';

//styles
import './styles/app.scss';

function App() {
  //state
  const [songs, setSongs] = useState(Data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
      <Library songs={songs}/>
    </div>
    
  );
}

export default App;
