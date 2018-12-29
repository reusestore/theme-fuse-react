import React from 'react';
import {AppBar, MuiThemeProvider, Toolbar} from '@material-ui/core';
import connect from 'react-redux/es/connect/connect';
import {FuseThemes} from '@fuse';
import PurchaseButton from 'fuse-layouts/shared/PurchaseButton';
import PoweredByLinks from 'fuse-layouts/shared/PoweredByLinks';

const FooterPartial = ({classes, settings}) => {

    return (
        <MuiThemeProvider theme={FuseThemes[settings.theme.footer]}>
            <AppBar id="fuse-footer" className="relative z-10" color="default">
                <Toolbar className="flex items-center container py-0 px-16 lg:px-24">

                    <div className="flex flex-1">
                        <PurchaseButton/>
                    </div>

                    <div>
                        <PoweredByLinks/>
                    </div>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
};

function mapStateToProps({fuse})
{
    return {
        settings: fuse.settings.current
    }
}

export default connect(mapStateToProps)(FooterPartial);
