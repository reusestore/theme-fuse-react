import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import React from 'react';

export default function MinHeightTextarea() {
  return <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" />;
}
