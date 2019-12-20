import React, { useState } from 'react';
import Display from './components/Display';
import Drum, { DrumConfigs } from './components/Drum';

const App = () => {
  const [lastSoundPlayedDescription, setLastSoundPlayedDescription] = useState(
    ''
  );

  return (
    <div id="drum-machine">
      <div id="display">
        <Display text={lastSoundPlayedDescription} />
      </div>
      <Drum
        onAudioPlayed={setLastSoundPlayedDescription}
        drumPadConfigs={DrumConfigs[0]}
      />
    </div>
  );
};

export default App;
