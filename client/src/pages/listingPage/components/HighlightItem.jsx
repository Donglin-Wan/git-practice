import React from 'react';
import { HightlightItem, TickIcon } from './Elements';

const HighlightBox = (benefit) => {
  return (
    <HightlightItem>
      <TickIcon />
      {benefit}
    </HightlightItem>
  );
};

export default HighlightBox;
