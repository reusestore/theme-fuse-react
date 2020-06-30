import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectMainThemeDark } from 'app/store/fuse/settingsSlice';

function FusePageCardedHeader(props) {
	const mainThemeDark = useSelector(selectMainThemeDark);

	return (
		<div className={props.classes.header}>
			{props.header && <ThemeProvider theme={mainThemeDark}>{props.header}</ThemeProvider>}
		</div>
	);
}

export default FusePageCardedHeader;
