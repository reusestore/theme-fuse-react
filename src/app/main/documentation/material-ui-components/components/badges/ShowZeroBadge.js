import Badge from '@material-ui/core/Badge';
import {makeStyles} from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ShowZeroBadge() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge color="secondary" badgeContent={0}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={0} showZero>
        <MailIcon />
      </Badge>
    </div>
  );
}
