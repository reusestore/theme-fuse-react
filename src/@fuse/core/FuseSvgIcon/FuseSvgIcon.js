import clsx from 'clsx';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const Root = styled('svg')(({ theme, ...props }) => ({
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={clsx('shrink-0 fill-current ', props.className)}
      ref={ref}
      size={props.size}
    >
      <use xlinkHref={`assets/icons/${iconPath}`} />
    </Root>
  );
});

FuseSvgIcon.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
FuseSvgIcon.defaultProps = {
  children: '',
  size: 24,
};

export default FuseSvgIcon;
