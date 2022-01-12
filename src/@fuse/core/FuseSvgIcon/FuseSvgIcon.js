import clsx from 'clsx';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const Root = styled(Box)(({ theme, ...props }) => ({
  width: props.size,
  height: props.size,
  minWidth: props.size,
  minHeight: props.size,
  fontSize: props.size,
  lineHeight: props.size,
}));

const FuseSvgIcon = forwardRef(function SvgIcon(props, ref) {
  const iconPath = props.children.replace(':', '.svg#');

  return (
    <Root
      component="svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={clsx('shrink-0 fill-current ', props.className)}
      ref={ref}
      size={props.size}
      sx={props.sx}
    >
      <use xlinkHref={`assets/icons/${iconPath}`} />
    </Root>
  );
});

FuseSvgIcon.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sx: PropTypes.object,
};
FuseSvgIcon.defaultProps = {
  children: '',
  size: 24,
  sx: {},
};

export default FuseSvgIcon;
