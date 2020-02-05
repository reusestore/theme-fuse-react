import Badge from '@material-ui/core/Badge';
import {makeStyles} from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

const defaultProps = {
  color: 'secondary',
  children: <MailIcon />,
};

export default function BadgeMax() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge badgeContent={99} {...defaultProps} />
      <Badge badgeContent={100} {...defaultProps} />
      <Badge badgeContent={1000} max={999} {...defaultProps} />
    </div>
  );
}
