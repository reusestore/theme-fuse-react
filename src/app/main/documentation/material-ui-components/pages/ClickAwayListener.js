import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ClickAwayListenerDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/click-away-listener"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Click-Away Listener
      </Typography>
      <Typography className="description">
        The Click-Away Listener component detects when a click event happens outside of its child
        element.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        MUI Base
      </Typography>
      <Typography className="mb-40" component="div">
        :::info Click-Away Listener is a part of the standalone{' '}
        <a href="/base/getting-started/overview/">MUI Base</a> component library. It is currently
        re-exported from <code>@mui/material</code> for your convenience, but it will be removed
        from this package in a future major version, after <code>@mui/base</code> gets a stable
        release.
      </Typography>
      <Typography className="mb-40" component="div">
        Please refer to the <a href="/base/react-click-away-listener/">Click-Away Listener</a>{' '}
        component page in the MUI Base docs for examples and details on usage. :::
      </Typography>
    </>
  );
}

export default ClickAwayListenerDoc;
