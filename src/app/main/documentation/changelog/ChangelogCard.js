import React from 'react';
import {Card, Typography, withStyles} from '@material-ui/core';
import classNames from 'classnames';
import {blue, green, red} from '@material-ui/core/colors';

const styles = theme => ({
    root : {
        padding: '24px 32px'
    },
    badge: {
        display      : 'inline-flex',
        fontSize     : 13,
        color        : '#fff',
        letterSpacing: '.015em',
        lineHeight   : 1,
        padding      : '5px 8px',
        borderRadius : 2,
        '&.new'      : {
            backgroundColor: green[500]
        },
        '&.fix'      : {
            backgroundColor: blue[500]
        },
        '&.breaking' : {
            backgroundColor: red[500]
        }
    }
});

const ChangelogCard = ({classes, className, version, date, newChanges, fixedChanges, breakingChanges, notes}) => {
    return (
        <Card className={classNames(classes.root, className)}>
            <div className="flex items-center">
                {version && (
                    <Typography className="text-24" component="h2">{`v${version}`}</Typography>
                )}
                {date && (
                    <Typography className="text-17 ml-8" color="textSecondary" component="h3">({date})</Typography>
                )}
            </div>
            {newChanges.length > 0 && (
                <div className="mt-24">
                    <div className={classNames(classes.badge, "new")}>New</div>
                    <ul className="my-16 pl-24">
                        {newChanges.map((change, index) => (
                            <li key={index} className="mb-6">
                                <Typography>{change}</Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {fixedChanges.length > 0 && (
                <div className="mt-24">
                    <div className={classNames(classes.badge, "fix")}>Fixed</div>
                    <ul className="my-16 pl-24">
                        {fixedChanges.map((change, index) => (
                            <li key={index} className="mb-6">
                                <Typography>{change}</Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {breakingChanges.length > 0 && (
                <div className="mt-24">
                    <div className={classNames(classes.badge, "breaking")}>Breaking Changes</div>
                    <ul className="my-16 pl-24">
                        {breakingChanges.map((change, index) => (
                            <li key={index} className="mb-6">
                                <Typography>{change}</Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {notes}

        </Card>
    );
};

ChangelogCard.defaultProps = {
    version        : null,
    date           : null,
    newChanges     : [],
    fixedChanges   : [],
    breakingChanges: [],
    notes          : null,
};
export default withStyles(styles, {withTheme: true})(ChangelogCard);
