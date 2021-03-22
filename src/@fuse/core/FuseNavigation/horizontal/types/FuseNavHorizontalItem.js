import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
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
			'& .list-item-text-primary': {
				color: 'inherit'
			},
			'& .list-item-icon': {
				color: 'inherit'
			}
		},
		'& .list-item-icon': {},
		'& .list-item-text': {
			padding: '0 0 0 16px'
		},
		color: theme.palette.text.primary,
		textDecoration: 'none!important'
	}
}));

function FuseNavHorizontalItem(props) {
	const userRole = useSelector(({ auth }) => auth.user.role);

	const classes = useStyles(props);
	const { item } = props;

	const hasPermission = useMemo(() => FuseUtils.hasPermission(item.auth, userRole), [item.auth, userRole]);

	return useMemo(
		() =>
			!hasPermission ? null : (
				<ListItem
					button
					component={NavLinkAdapter}
					to={item.url}
					activeClassName="active"
					className={clsx('list-item', classes.root)}
					exact={item.exact}
				>
					{item.icon && (
						<Icon className="list-item-icon text-16 flex-shrink-0" color="action">
							{item.icon}
						</Icon>
					)}

					<ListItemText
						className="list-item-text"
						primary={item.title}
						classes={{ primary: 'text-13 list-item-text-primary' }}
					/>

					{item.badge && <FuseNavBadge className="ltr:ml-8 rtl:mr-8" badge={item.badge} />}
				</ListItem>
			),
		[classes.root, hasPermission, item.badge, item.exact, item.icon, item.title, item.url]
	);
}

FuseNavHorizontalItem.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string,
		icon: PropTypes.string,
		url: PropTypes.string
	})
};

FuseNavHorizontalItem.defaultProps = {};

const NavHorizontalItem = withRouter(memo(FuseNavHorizontalItem));

export default NavHorizontalItem;
