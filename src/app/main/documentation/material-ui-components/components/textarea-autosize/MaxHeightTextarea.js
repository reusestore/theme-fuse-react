import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import React from 'react';

export default function MaxHeightTextarea() {
  return (
    <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
    />
  );
}
