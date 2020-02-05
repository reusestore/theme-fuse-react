import Avatar from '@material-ui/core/Avatar';
import {deepOrange, green} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core/styles';
import AssignmentIcon from '@material-ui/icons/Assignment';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  rounded: {
    color: '#fff',
    backgroundColor: green[500],
  },
}));

export default function VariantAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar variant="square" className={classes.square}>
        N
      </Avatar>
      <Avatar variant="rounded" className={classes.rounded}>
        <AssignmentIcon />
      </Avatar>
    </div>
  );
}
