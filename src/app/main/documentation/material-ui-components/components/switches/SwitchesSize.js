import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import React from 'react';

export default function SwitchesSize() {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked(prev => !prev);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
        label="Small"
      />
      <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} />}
        label="Normal"
      />
    </FormGroup>
  );
}
