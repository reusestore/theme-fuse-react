import React, {Component} from 'react';
import FuseNavVerticalGroup from './vertical/FuseNavVerticalGroup';
import FuseNavVerticalCollapse from './vertical/FuseNavVerticalCollapse';
import FuseNavVerticalItem from './vertical/FuseNavVerticalItem';
import {Divider, List} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
    navigation: PropTypes.array.isRequired
};

const defaultProps = {};

class FuseNavigation extends Component {

    render()
    {
        const {navigation} = this.props;

        return (
            navigation.length > 0 && (
                <List className="whitespace-no-wrap">
                    {
                        navigation.map((item) => (

                            <React.Fragment key={item.id}>

                                {item.type === 'group' && (
                                    <FuseNavVerticalGroup item={item} nestedLevel={0}/>
                                )}

                                {item.type === 'collapse' && (
                                    <FuseNavVerticalCollapse item={item} nestedLevel={0}/>
                                )}

                                {item.type === 'item' && (
                                    <FuseNavVerticalItem item={item} nestedLevel={0}/>
                                )}

                                {item.type === 'divider' && (
                                    <Divider className="my-16"/>
                                )}
                            </React.Fragment>
                        ))
                    }
                </List>
            )
        );
    }
}

FuseNavigation.propTypes = propTypes;
FuseNavigation.defaultProps = defaultProps;

export default withRouter(FuseNavigation);
