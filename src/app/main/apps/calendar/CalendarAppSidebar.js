import { motion } from 'framer-motion';
import { Checkbox, IconButton } from '@mui/material';
import clsx from 'clsx';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { selectLabels, selectSelectedLabels, toggleSelectedLabels } from './store/labelsSlice';

function CalendarAppSidebar() {
  const labels = useSelector(selectLabels);
  const selectedLabels = useSelector(selectSelectedLabels);
  const dispatch = useDispatch();

  function addLabel() {
    console.info('add label');
  }

  return (
    <div className="flex flex-col flex-auto min-h-full p-32">
      <motion.span
        initial={{ x: -20 }}
        animate={{ x: 0, transition: { delay: 0.2 } }}
        delay={300}
        className="pb-24 text-4xl font-extrabold tracking-tight"
      >
        Calendar
      </motion.span>

      <div className="group flex items-center justify-between mb-12">
        <Typography className="text-13 font-600" color="secondary">
          LABELS
        </Typography>

        <IconButton onClick={addLabel} size="small">
          <FuseSvgIcon color="action" size={20}>
            heroicons-solid:plus-circle
          </FuseSvgIcon>
        </IconButton>
      </div>

      {labels.map((label) => (
        <div key={label.id} className="group flex items-center mt-8 space-x-8 h-24 w-full">
          <Checkbox
            color="default"
            className="p-0"
            checked={selectedLabels.includes(label.id)}
            onChange={() => {
              dispatch(toggleSelectedLabels(label.id));
            }}
          />

          <span className={clsx('w-12 h-12 shrink-0 rounded-full', label.color)} />

          <Typography className="flex flex-1 leading-none">{label.title}</Typography>

          <IconButton className="hidden group-hover:inline-flex cursor-pointer">
            <FuseSvgIcon size={20}>heroicons-solid:pencil-alt</FuseSvgIcon>
          </IconButton>
        </div>
      ))}
    </div>
  );
}

export default CalendarAppSidebar;
