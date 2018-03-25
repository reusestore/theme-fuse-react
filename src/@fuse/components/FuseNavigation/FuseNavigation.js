import React, {Component} from 'react';
import FuseNavVerticalGroup from './vertical/FuseNavVerticalGroup';
import FuseNavVerticalCollapse from './vertical/FuseNavVerticalCollapse';
import FuseNavVerticalItem from './vertical/FuseNavVerticalItem';
import {Divider, List} from 'material-ui';
import {withRouter} from 'react-router-dom';

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
};

export default withRouter(FuseNavigation);
