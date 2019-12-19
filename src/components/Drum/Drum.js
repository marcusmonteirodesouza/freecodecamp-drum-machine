import React from 'react';
import PropTypes from 'prop-types';
import DrumPad, { DrumPadProps } from './DrumPad';
import { isChar } from '../../utils';

export class DrumPadConfig {
  constructor(keyboardKey, audioDescription, audioSrc) {
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

    this.keyboardKey = keyboardKey;
    this.audioDescription = audioDescription;
    this.audioSrc = audioSrc;
  }
}

const Drum = ({ onAudioPlayed, drumPadConfigs }) => {
  return (
    <div>
      {drumPadConfigs.map((p, i) => (
        <DrumPad
          key={i}
          drumPadProps={
            new DrumPadProps(
              p.keyboardKey,
              p.audioDescription,
              p.audioSrc,
              onAudioPlayed
            )
          }
        />
      ))}
    </div>
  );
};

Drum.propTypes = {
  onAudioPlayed: PropTypes.func,
  drumPadConfigs: PropTypes.arrayOf(PropTypes.instanceOf(DrumPadConfig))
};

export const DrumConfigs = [
  [
    new DrumPadConfig(
      'Q',
      'Heater-1',
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    )
  ]
];

export default Drum;
