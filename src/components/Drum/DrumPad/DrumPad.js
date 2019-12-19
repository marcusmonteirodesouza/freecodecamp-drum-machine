import React from 'react';
import PropTypes from 'prop-types';
import { isChar } from '../../../utils';

export class DrumPadProps {
  constructor(keyboardKey, audioDescription, audioSrc, onAudioPlayed) {
    if (!isChar(keyboardKey)) {
      throw new Error(
        `Invalid keyboardKey ${keyboardKey}. It must be a single character`
      );
    }

    if (typeof audioDescription !== 'string') {
      throw new Error(`audioDescription must be a string`);
    }

    if (typeof audioSrc !== 'string') {
      throw new Error(`audioSrc must be a string`);
    }

    if (typeof onAudioPlayed !== 'function') {
      throw new Error(`onAudioPlayed must be a function`);
    }

    this.keyboardKey = keyboardKey.toUpperCase();
    this.audioDescription = audioDescription;
    this.audioSrc = audioSrc;
    this.onAudioPlayed = onAudioPlayed;
  }
}

const DrumPad = ({ drumPadProps }) => {
  const keyboardKey = drumPadProps.keyboardKey;
  const audioDescription = drumPadProps.audioDescription;
  const audioSrc = drumPadProps.audioSrc;
  const onAudioPlayed = drumPadProps.onAudioPlayed;

  const playAudio = () => {
    const sound = document.getElementById(keyboardKey);
    sound.currentTime = 0;
    sound.play();

    onAudioPlayed();
  };

  const handleKeyDown = e => {
    if (e.key.toUpperCase() === keyboardKey) {
      playAudio();
    }
  };

  return (
    <div>
      <button
        className="drum-pad"
        id={audioDescription}
        type="button"
        onClick={playAudio}
        onKeyDown={handleKeyDown}
      >
        keyboardKey
        <audio className="clip" id={keyboardKey} src={audioSrc}></audio>
      </button>
    </div>
  );
};

DrumPad.propTypes = {
  drumPadProps: PropTypes.instanceOf(DrumPadProps)
};

export default DrumPad;
