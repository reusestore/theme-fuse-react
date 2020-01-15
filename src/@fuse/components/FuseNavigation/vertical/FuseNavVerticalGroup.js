import React from 'react';
import {ListSubheader} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FuseUtils, NavLinkAdapter} from '@fuse';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import FuseNavVerticalCollapse from './FuseNavVerticalCollapse';
import FuseNavVerticalItem from './FuseNavVerticalItem';
import FuseNavVerticalLink from './FuseNavVerticalLink';
import * as Actions from 'app/store/actions';
import {useTranslation} from 'react-i18next';

const useStyles = makeStyles(theme => ({
    item: props => ({
        height                           : 40,
        width                            : 'calc(100% - 16px)',
        borderRadius                     : '0 20px 20px 0',
        paddingRight                     : 12,
        paddingLeft                      : props.itemPadding > 80 ? 80 : props.itemPadding,
        '&.active > .list-subheader-text': {
            fontWeight: 700
        }
    })
}));

function FuseNavVerticalGroup(props)
{
    const userRole = useSelector(({auth}) => auth.user.role);
    const dispatch = useDispatch();
    const {item, nestedLevel} = props;
    const classes = useStyles({
        itemPadding: nestedLevel > 0 ? 40 + (nestedLevel * 16) : 24
    });
    const {t} = useTranslation('navigation');


    if ( !FuseUtils.hasPermission(item.auth, userRole) )
    {
        return null;
    }

    return (
        <React.Fragment>

            <ListSubheader
                disableSticky={true}
                className={clsx(classes.item, "list-subheader flex items-center", !item.url && 'cursor-default')}
                onClick={ev => dispatch(Actions.navbarCloseMobile())}
                component={item.url ? NavLinkAdapter : 'li'}
                to={item.url}
                role="button"
            >
                <span className="list-subheader-text uppercase text-12">
                    {item.translate ? t(item.translate) : item.title}
                </span>
            </ListSubheader>

            {item.children && (
                <React.Fragment>
                    {
                        item.children.map((item) => (

                            <React.Fragment key={item.id}>

                                {item.type === 'group' && (
                                    <NavVerticalGroup item={item} nestedLevel={nestedLevel}/>
                                )}

                                {item.type === 'collapse' && (
                                    <FuseNavVerticalCollapse item={item} nestedLevel={nestedLevel}/>
                                )}

                                {item.type === 'item' && (
                                    <FuseNavVerticalItem item={item} nestedLevel={nestedLevel}/>
                                )}

                                {item.type === 'link' && (
                                    <FuseNavVerticalLink item={item} nestedLevel={nestedLevel}/>
                                )}

                            </React.Fragment>
                        ))
                    }
                </React.Fragment>
            )}
        </React.Fragment>
    );
}

FuseNavVerticalGroup.propTypes = {
    item: PropTypes.shape(
        {
            id      : PropTypes.string.isRequired,
            title   : PropTypes.string,
            children: PropTypes.array
        })
};

FuseNavVerticalGroup.defaultProps = {};

const NavVerticalGroup = withRouter(React.memo(FuseNavVerticalGroup));

export default NavVerticalGroup;
