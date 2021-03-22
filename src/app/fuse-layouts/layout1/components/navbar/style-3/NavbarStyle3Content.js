import FuseScrollbars from '@fuse/core/FuseScrollbars';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FuseNavigation from '@fuse/core/FuseNavigation/FuseNavigation';
import { selectNavigation } from 'app/store/fuse/navigationSlice';
import { navbarCloseMobile } from '../../../../../store/fuse/navbarSlice';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.primary,
		'& ::-webkit-scrollbar-thumb': {
			boxShadow: `inset 0 0 0 20px ${
				theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.24)' : 'rgba(255, 255, 255, 0.24)'
			}`
		},
		'& ::-webkit-scrollbar-thumb:active': {
			boxShadow: `inset 0 0 0 20px ${
				theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.37)' : 'rgba(255, 255, 255, 0.37)'
			}`
		}
	},
	content: {
		minWidth: 280,
		width: 280,
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary,
		overscrollBehavior: 'contain',
		overflowX: 'hidden',
		overflowY: 'auto',
		'-webkit-overflow-scrolling': 'touch',
		background:
			'linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 40%)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 40px, 100% 10px',
		backgroundAttachment: 'local, scroll'
	}
}));

function NavbarStyle3Content(props) {
	const classes = useStyles();
	const navigation = useSelector(selectNavigation);
	const [selectedNavigation, setSelectedNavigation] = useState([]);
	const [panelOpen, setPanelOpen] = useState(false);
	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const dispatch = useDispatch();

	function handleParentItemClick(selected) {
		/** if there is no child item do not set/open panel
		 */
		if (!selected.children) {
			setSelectedNavigation([]);
			setPanelOpen(false);
			return;
		}

		/**
		 * If navigation already selected toggle panel visibility
		 */
		if (selectedNavigation[0]?.id === selected.id) {
			setPanelOpen(!panelOpen);
		} else {
			/**
			 * Set navigation and open panel
			 */
			setSelectedNavigation([selected]);
			setPanelOpen(true);
		}
	}

	function handleChildItemClick(selected) {
		setPanelOpen(false);
		mdDown && dispatch(navbarCloseMobile());
	}

	return (
		<ClickAwayListener onClickAway={() => setPanelOpen(false)}>
			<div className={clsx('flex flex-auto flex h-full', classes.root, props.className)}>
				<div className="flex flex-shrink-0 flex-col items-center w-full">
					<img className="w-44 my-32" src="assets/images/logos/fuse.svg" alt="logo" />

					<FuseScrollbars className="w-full" option={{ suppressScrollX: true }}>
						<FuseNavigation
							className={clsx('navigation')}
							navigation={navigation}
							layout="vertical-2"
							onItemClick={handleParentItemClick}
							firstLevel
						/>
					</FuseScrollbars>
				</div>

				{selectedNavigation.length > 0 && (
					<FuseScrollbars
						className={clsx(classes.content, !panelOpen && 'hidden')}
						option={{ suppressScrollX: true }}
					>
						<FuseNavigation
							className={clsx('navigation')}
							navigation={selectedNavigation}
							layout="vertical"
							onItemClick={handleChildItemClick}
						/>
					</FuseScrollbars>
				)}
			</div>
		</ClickAwayListener>
	);
}

export default memo(NavbarStyle3Content);
