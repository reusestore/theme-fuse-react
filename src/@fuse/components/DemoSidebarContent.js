import React from 'react';
import {List, ListItem, ListItemText} from 'material-ui';
import _ from 'lodash';

const DemoSidebarContent = () => {
    const generate = (element) => {
        return _(30).times(value =>
            React.cloneElement(element, {
                key: value
            })
        );
    };
    return (
        <div>
            <List dense={true}>
                {generate(
                    <ListItem button>
                        <ListItemText
                            primary="Single-line item"
                        />
                    </ListItem>
                )}
            </List>
        </div>
    );
};

export default DemoSidebarContent;
