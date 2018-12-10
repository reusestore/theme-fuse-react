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
                <Toolbar className="px-16 py-0 flex items-center">

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
