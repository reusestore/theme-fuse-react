import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'fit-content',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(2),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
}));

export default function VerticalDividers() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.root}>
      <FormatAlignLeftIcon />
      <FormatAlignCenterIcon />
      <FormatAlignRightIcon />
      <Divider orientation="vertical" />
      <FormatBoldIcon />
      <FormatItalicIcon />
      <FormatUnderlinedIcon />
    </Grid>
  );
}
