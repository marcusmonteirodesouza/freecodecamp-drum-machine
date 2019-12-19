import React, { useState } from 'react';
import Display from './components/Display';
import Drum, { DrumConfigs } from './components/Drum';

function App() {
  const [lastSoundPlayedDescription, setLastSoundPlayedDescription] = useState(
    ''
  );

  const setDisplayText = e => {
    console.log(e);
  };

  return (
    <div id="drum-machine">
      <Display text={lastSoundPlayedDescription} />
      <Drum
        onAudioPlayed={() => setDisplayText('App.js')}
        drumPadConfigs={DrumConfigs[0]}
      />
    </div>
  );
}

export default App;
