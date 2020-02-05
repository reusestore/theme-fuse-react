import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';

export default function ArrowTooltips() {
  return (
    <Tooltip title="Add" arrow>
      <Button>Arrow</Button>
    </Tooltip>
  );
}
