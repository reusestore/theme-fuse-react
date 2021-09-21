import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function HiddenDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/hidden"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Hidden
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          <code>Hidden</code> is deprecated, checkout{' '}
          <a href="/guides/migration-v4/#hidden">migration docs</a>
        </Typography>
      </blockquote>
      <Typography className="description" />
    </>
  );
}

export default HiddenDoc;
