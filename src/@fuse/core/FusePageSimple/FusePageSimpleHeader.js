import clsx from 'clsx';

function FusePageSimpleHeader(props) {
  return <div className={clsx('FusePageSimple-header')}>{props.header && props.header}</div>;
}

export default FusePageSimpleHeader;
