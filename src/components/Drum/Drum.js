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
    [
      'Q',
      'Heater-1',
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    ],
    [
      'W',
      'Heater-2',
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    ],
    [
      'E',
      'Heater-3',
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    ],
    [
      'A',
      'Heater-4',
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    ],
    ['S', 'Clap', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'],
    ['D', 'Open-HH', 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'],
    [
      'Z',
      "Kick-n'-Hat",
      'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    ],
    ['X', 'Kick', 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'],
    ['C', 'Closed-HH', 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3']
  ].map(c => new DrumPadConfig(c[0], c[1], c[2]))
];

export default Drum;
