import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PoweredByLinks from 'app/fuse-layouts/shared-components/PoweredByLinks';
import PurchaseButton from 'app/fuse-layouts/shared-components/PurchaseButton';
import DocumentationButton from 'app/fuse-layouts/shared-components/DocumentationButton';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';

function FooterLayout3(props) {
	const footerTheme = useSelector(selectFooterTheme);

	return (
		<ThemeProvider theme={footerTheme}>
			<AppBar
				id="fuse-footer"
				className="relative z-10"
				color="default"
				style={{ backgroundColor: footerTheme.palette.background.paper }}
				elevation={2}
			>
				<Toolbar className="flex items-center container py-0 px-12 lg:px-20">
					<div className="flex flex-1">
						<PurchaseButton className="mx-4" />
						<DocumentationButton className="mx-4" />
					</div>

					<div className="px-12">
						<PoweredByLinks />
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default React.memo(FooterLayout3);
