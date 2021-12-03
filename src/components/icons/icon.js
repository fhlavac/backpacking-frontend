import React from 'react';
import propTypes from 'prop-types';
import IconClothing from './icon-clothing';
import IconCooking from './icon-cooking';
import IconElectronics from './icon-electronics';
import IconFirstAid from './icon-firstaid';
import IconFood from './icon-food';
import IconHiking from './icon-hiking';
import IconHygiene from './icon-hygiene';
import IconOtherPersonal from './icon-other-personal';
import IconSleepingGear from './icon-sleeping-gear';
import IconTools from './icon-tools';
import IconWater from './icon-water';

const Icon = ({ name }) => {
  switch (name) {
    case 'clothing': {
      return <IconClothing />;
    }
    case 'climbing': {
      return <IconHiking />;
    }
    case 'cooking': {
      return <IconCooking />;
    }
    case 'electronics': {
      return <IconElectronics />;
    }
    case 'first aid': {
      return <IconFirstAid />;
    }
    case 'food': {
      return <IconFood />;
    }
    case 'hygiene': {
      return <IconHygiene />;
    }
    case 'other/personal': {
      return <IconOtherPersonal />;
    }
    case 'sleeping gear': {
      return <IconSleepingGear />;
    }
    case 'tools': {
      return <IconTools />;
    }
    case 'water': {
      return <IconWater />;
    }
    default: {
      return <IconHiking />;
    }
  }
};

Icon.propTypes = {
  name: propTypes.string.isRequired,
};

export default Icon;
