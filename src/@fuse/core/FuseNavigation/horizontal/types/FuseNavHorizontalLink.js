import FuseUtils from '@fuse/utils';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FuseNavBadge from '../../FuseNavBadge';

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: 48,
		'&.active': {
			backgroundColor: `${theme.palette.secondary.main}!important`,
			color: `${theme.palette.secondary.contrastText}!important`,
			pointerEvents: 'none',
			'& .fuse-list-item-text-primary': {
				color: 'inherit'
			},
			'& .fuse-list-item-icon': {
				color: 'inherit'
			}
		},
		'& .fuse-list-item-icon': {},
		'& .fuse-list-item-text': {
			padding: '0 0 0 16px'
		},
		color: theme.palette.text.primary,
		textDecoration: 'none!important'
	}
}));

function FuseNavHorizontalLink(props) {
	const userRole = useSelector(({ auth }) => auth.user.role);

	const classes = useStyles(props);
	const { item } = props;

	const hasPermission = useMemo(() => FuseUtils.hasPermission(item.auth, userRole), [item.auth, userRole]);

	return useMemo(
		() =>
			!hasPermission ? null : (
				<ListItem
					button
					component="a"
					href={item.url}
					target={item.target ? item.target : '_blank'}
					className={clsx('fuse-list-item', classes.root)}
					role="button"
				>
					{item.icon && (
						<Icon className="fuse-list-item-icon text-16 flex-shrink-0" color="action">
							{item.icon}
						</Icon>
					)}

					<ListItemText
						className="fuse-list-item-text"
						primary={item.title}
						classes={{ primary: 'text-13 fuse-list-item-text-primary' }}
					/>

					{item.badge && <FuseNavBadge className="ltr:ml-8 rtl:mr-8" badge={item.badge} />}
				</ListItem>
			),
		[classes.root, hasPermission, item.badge, item.icon, item.target, item.title, item.url]
	);
}

FuseNavHorizontalLink.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string,
		icon: PropTypes.string,
		url: PropTypes.string,
		target: PropTypes.string
	})
};

FuseNavHorizontalLink.defaultProps = {};

const NavHorizontalLink = withRouter(memo(FuseNavHorizontalLink));

export default NavHorizontalLink;
