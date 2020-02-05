import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';

export default function InteractiveTooltips() {
  return (
    <Tooltip title="Add" interactive>
      <Button>Interactive</Button>
    </Tooltip>
  );
}
