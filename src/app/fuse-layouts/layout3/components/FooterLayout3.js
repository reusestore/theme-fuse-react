import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import connect from 'react-redux/es/connect/connect';
import PurchaseButton from 'app/fuse-layouts/shared-components/PurchaseButton';
import PoweredByLinks from 'app/fuse-layouts/shared-components/PoweredByLinks';

function FooterLayout3(props)
{
    return (
        <ThemeProvider theme={props.footerTheme}>
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
        </ThemeProvider>
    );
}

function mapStateToProps({fuse})
{
    return {
        footerTheme: fuse.settings.footerTheme
    }
}

export default connect(mapStateToProps)(FooterLayout3);
