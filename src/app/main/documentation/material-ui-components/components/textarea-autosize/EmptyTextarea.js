import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import React from 'react';

export default function EmptyTextarea() {
  return <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />;
}
