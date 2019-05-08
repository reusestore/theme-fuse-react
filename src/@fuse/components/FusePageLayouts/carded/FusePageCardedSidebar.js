import React, {useImperativeHandle, useState} from 'react';
import {Hidden, Drawer} from '@material-ui/core';
import classNames from 'classnames';
import FusePageCardedSidebarContent from './FusePageCardedSidebarContent';

function FusePageCardedSidebar(props, ref)
{
    const [isOpen, setIsOpen] = useState(false);
    const classes = props.classes;

    useImperativeHandle(ref, () => ({
        toggleSidebar: handleToggleDrawer
    }));

    const handleToggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <React.Fragment>
            <Hidden lgUp={props.variant === 'permanent'}>
                <Drawer
                    variant="temporary"
                    anchor={props.position}
                    open={isOpen}
                    onClose={(ev) => handleToggleDrawer()}
                    classes={{
                        root : classNames(classes.sidebarWrapper, props.variant),
                        paper: classNames(classes.sidebar, props.variant, props.position === 'left' ? classes.leftSidebar : classes.rightSidebar)
                    }}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    container={props.rootRef.current}
                    BackdropProps={{
                        classes: {
                            root: classes.backdrop
                        }
                    }}
                    style={{position: 'absolute'}}
                    onClick={(ev) => handleToggleDrawer()}
                >
                    <FusePageCardedSidebarContent {...props}/>
                </Drawer>
            </Hidden>
            {props.variant === 'permanent' && (
                <Hidden mdDown>
                    <Drawer
                        variant="permanent"
                        className={classNames(classes.sidebarWrapper, props.variant)}
                        open={isOpen}
                        classes={{
                            paper: classNames(classes.sidebar, props.variant, props.position === 'left' ? classes.leftSidebar : classes.rightSidebar)
                        }}>
                        <FusePageCardedSidebarContent {...props}/>
                    </Drawer>
                </Hidden>
            )}
        </React.Fragment>
    )
}

export default React.forwardRef(FusePageCardedSidebar);
