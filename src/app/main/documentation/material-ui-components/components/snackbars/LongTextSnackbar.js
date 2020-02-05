import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LongTextSnackbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SnackbarContent message="I love snacks." action={action} />
      <SnackbarContent
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
      />
      <SnackbarContent message="I love candy. I love cookies. I love cupcakes." action={action} />
      <SnackbarContent
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
        action={action}
      />
    </div>
  );
}
