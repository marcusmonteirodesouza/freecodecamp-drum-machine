import React, { useCallback, useEffect } from 'react';
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

  const playAudio = useCallback(() => {
    const sound = document.getElementById(keyboardKey);
    sound.currentTime = 0;
    sound.play();

    onAudioPlayed(audioDescription);
  }, [audioDescription, keyboardKey, onAudioPlayed]);

  const handleKeyDown = useCallback(
    e => {
      e.preventDefault();
      if (e.key.toUpperCase() === keyboardKey) {
        playAudio();
      }
    },
    [keyboardKey, playAudio]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div>
      <button
        className="drum-pad"
        id={audioDescription}
        type="button"
        onClick={playAudio}
      >
        {keyboardKey}
        <audio className="clip" id={keyboardKey} src={audioSrc}></audio>
      </button>
    </div>
  );
};

DrumPad.propTypes = {
  drumPadProps: PropTypes.instanceOf(DrumPadProps)
};

export default DrumPad;
