import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import NewLabelForm from 'app/main/apps/calendar/dialogs/labels/NewLabelForm';
import LabelItemForm from 'app/main/apps/calendar/dialogs/labels/LabelItemForm';
import List from '@mui/material/List';
import { closeLabelsDialog, selectLabels, selectLabelsDialogOpen } from '../../store/labelsSlice';

function LabelsDialog(props) {
  const dispatch = useDispatch();
  const labelsDialogOpen = useSelector(selectLabelsDialogOpen);
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
          <LabelItemForm label={item} key={item.id} isLast={labels.length === 1} />
        ))}
      </List>
    </Dialog>
  );
}

export default LabelsDialog;
