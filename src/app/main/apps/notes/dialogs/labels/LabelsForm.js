import { useDebounce } from '@fuse/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import _ from '@lodash';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import LabelModel from 'app/main/apps/notes/model/LabelModel';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { updateLabels } from '../../store/labelsSlice';

const defaultValues = {
  name: '',
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  title: yup.string().required('You must enter a label title'),
});

function LabelsForm(props) {
  const dispatch = useDispatch();
  const labels = useSelector(({ notesApp }) => notesApp.labels.entities);

  const [labelsForm, setLabels] = useState(labels);

  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    setLabels(labels);
  }, [labels]);

  const handleOnChange = useDebounce((_labels) => {
    dispatch(updateLabels(_labels));
  }, 300);

  useEffect(() => {
    if (labelsForm && !_.isEqual(labelsForm, labels)) {
      handleOnChange(labelsForm);
    }
  }, [handleOnChange, labels, labelsForm]);

  function onSubmit(data) {
    const newLabel = LabelModel(data);
    setLabels(_.setIn(labelsForm, newLabel.id, newLabel));
    reset(defaultValues);
  }

  return (
    <>
      <Typography className="text-20 mb-24 font-semibold">Edit Labels</Typography>
      <List dense>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ListItem className="p-0 mb-16" dense>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className={clsx('flex flex-1')}
                  error={!!errors.title}
                  helperText={errors?.title?.message}
                  placeholder="Create new label"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FuseSvgIcon color="action">heroicons-outline:tag</FuseSvgIcon>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          className="w-32 h-32 p-0"
                          aria-label="Delete"
                          disabled={_.isEmpty(dirtyFields) || !isValid}
                          type="submit"
                          size="large"
                        >
                          <FuseSvgIcon color="action" size={20}>
                            heroicons-outline:check
                          </FuseSvgIcon>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </ListItem>
        </form>
        {useMemo(() => {
          function handleOnDelete(label) {
            setLabels(_.omit(labelsForm, [label.id]));
          }

          function handleLabelChange(event, label) {
            const updatedLabel = LabelModel(_.setIn(label, event.target.name, event.target.value));
            setLabels(_.setIn(labelsForm, updatedLabel.id, updatedLabel));
          }

          return Object.entries(labelsForm).map(([key, label]) => (
            <ListItem className="p-0 mb-8 px-12" key={label.id} dense>
              <FuseSvgIcon color="action" size={20}>
                heroicons-outline:tag
              </FuseSvgIcon>
              <Input
                className={clsx('flex flex-1 px-12')}
                name="title"
                value={label.title}
                onChange={(event) => handleLabelChange(event, label)}
                disableUnderline
              />
              <IconButton
                className="w-32 h-32 mx-4 p-0"
                aria-label="Delete"
                onClick={(ev) => handleOnDelete(label)}
                size="large"
              >
                <FuseSvgIcon color="action" size={20}>
                  heroicons-outline:trash
                </FuseSvgIcon>
              </IconButton>
            </ListItem>
          ));
        }, [labelsForm])}
      </List>
    </>
  );
}

export default LabelsForm;
