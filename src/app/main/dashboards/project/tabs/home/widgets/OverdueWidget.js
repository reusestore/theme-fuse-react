import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectWidgets } from '../../../store/widgetsSlice';

function OverdueWidget() {
  const widgets = useSelector(selectWidgets);
  const { data, title } = widgets?.overdue;

  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-8 pt-12">
        <Typography
          className="px-16 text-lg font-medium tracking-tight leading-6 truncate"
          color="textSecondary"
        >
          {title}
        </Typography>
        <IconButton aria-label="more" size="large">
          <Icon>more_vert</Icon>
        </IconButton>
      </div>
      <div className="text-center mt-8">
        <Typography className="text-7xl sm:text-8xl font-bold tracking-tight leading-none text-red-500">
          {data.count}
        </Typography>
        <Typography className="text-lg font-medium text-red-600">{data.name}</Typography>
      </div>
      <Typography className="flex items-baseline justify-center w-full mt-20 mb-24" color="textSecondary">
        <span className="truncate">{data.extra.name}</span>:
        <b className="px-8">{data.extra.count}</b>
      </Typography>
    </Paper>
  );
}

export default memo(OverdueWidget);
