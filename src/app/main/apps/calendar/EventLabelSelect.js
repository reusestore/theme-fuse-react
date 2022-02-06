import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { selectLabelById, selectLabels } from './store/labelsSlice';

function EventLabelSelect(props) {
  const { value, onChange, className } = props;
  const labels = useSelector(selectLabels);
  const selectedLabel = useSelector((state) => selectLabelById(state, value));
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth className={className}>
      <InputLabel id="select-label">Label</InputLabel>
      <Select
        labelId="select-label"
        id="label-select"
        value={value}
        label="Label"
        onChange={handleChange}
        startAdornment={
          <span
            className={clsx(
              'w-12 h-12 shrink-0 rounded-full ltr:mr-12 rtl:ml-12',
              selectedLabel?.color
            )}
          />
        }
      >
        {labels.map((label) => (
          <MenuItem value={label.id} key={label.id} className="space-x-12">
            <span className={clsx('w-12 h-12 shrink-0 rounded-full', label.color)} />
            <span>{label.title}</span>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default EventLabelSelect;
