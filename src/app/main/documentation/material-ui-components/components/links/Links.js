/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Links() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  return (
    <Typography className={classes.root}>
      <Link href="#" onClick={preventDefault}>
        Link
      </Link>
      <Link href="#" onClick={preventDefault} color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" onClick={preventDefault} variant="body2">
        {'variant="body2"'}
      </Link>
    </Typography>
  );
}
