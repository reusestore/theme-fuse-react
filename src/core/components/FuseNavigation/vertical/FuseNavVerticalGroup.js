import React from 'react';
import FuseNavVerticalCollapse from './FuseNavVerticalCollapse';
import FuseNavVerticalItem from './FuseNavVerticalItem';
import {ListSubheader} from 'material-ui';
import {withRouter} from 'react-router-dom';

const FuseNavVerticalGroup = ({item, nestedLevel}) => {

    let paddingValue = 32 + (nestedLevel * 16);
    const listItemPadding = nestedLevel > 0 ? 'pl-' + (paddingValue > 80 ? 80 : paddingValue) : '';

    return (
        <React.Fragment>

            <ListSubheader disableSticky={true} className={listItemPadding}>
                {item.title}
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

                            </React.Fragment>
                        ))
                    }
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

const NavVerticalGroup = withRouter(FuseNavVerticalGroup);

export default NavVerticalGroup;
