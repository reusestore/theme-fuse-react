import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import NewLabelForm from 'app/main/apps/notes/dialogs/labels/NewLabelForm';
import LabelItemForm from 'app/main/apps/notes/dialogs/labels/LabelItemForm';
import List from '@mui/material/List';
import { closeLabelsDialog, selectLabels } from '../../store/labelsSlice';

function LabelsDialog(props) {
  const dispatch = useDispatch();
  const labelsDialogOpen = useSelector(({ notesApp }) => notesApp.labels.labelsDialogOpen);
  const labels = useSelector(selectLabels);

  return (
    <Dialog
      classes={{
        paper: 'w-full max-w-320 p-24 md:p-40 m-24',
      }}
      onClose={(ev) => dispatch(closeLabelsDialog())}
      open={labelsDialogOpen}
    >
      <Typography className="text-20 mb-24 font-semibold">Edit Labels</Typography>

      <List dense>
        <NewLabelForm />

        {labels.map((item) => (
          <LabelItemForm label={item} key={item.id} />
        ))}
      </List>
    </Dialog>
  );
}

export default LabelsDialog;
