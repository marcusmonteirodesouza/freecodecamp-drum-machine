import React, { useState } from 'react';
import Display from './components/Display';
import Drum, { DrumConfigs } from './components/Drum';

function App() {
  const [lastSoundPlayedDescription, setLastSoundPlayedDescription] = useState(
    ''
  );

  return (
    <div id="drum-machine">
      <Display text={lastSoundPlayedDescription} />
      <Drum
        onAudioPlayed={setLastSoundPlayedDescription}
        drumPadConfigs={DrumConfigs[0]}
      />
    </div>
  );
}

export default App;
