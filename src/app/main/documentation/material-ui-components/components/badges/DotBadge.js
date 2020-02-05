import Badge from '@material-ui/core/Badge';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function DotBadge() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge color="secondary" variant="dot">
        <MailIcon />
      </Badge>
      <Badge color="secondary" variant="dot">
        <Typography>Typography</Typography>
      </Badge>
    </div>
  );
}
