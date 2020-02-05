import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';
import React from 'react';

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.gilad} onChange={handleChange('gilad')} value="gilad" />}
          label="Gilad Gray"
        />
        <FormControlLabel
          control={<Switch checked={state.jason} onChange={handleChange('jason')} value="jason" />}
          label="Jason Killian"
        />
        <FormControlLabel
          control={
            <Switch checked={state.antoine} onChange={handleChange('antoine')} value="antoine" />
          }
          label="Antoine Llorca"
        />
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  );
}
