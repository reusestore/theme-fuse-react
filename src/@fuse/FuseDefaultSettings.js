import _ from 'lodash';
import FuseSettingsConfig from 'fuse-configs/fuseSettingsConfig';

const defaultSettings = {
    layout          : {
        navbar      : 'left', // 'right', 'left', 'top', 'none'
        navbarFolded: false, // true, false
        toolbar     : 'below', // 'above', 'below', 'none'
        footer      : 'below', // 'above', 'below', 'none'
        mode        : 'fullwidth' // 'boxed', 'fullwidth'
    },
    customScrollbars: true,
    theme           : 'default',
    navbarTheme     : 'default',
    toolbarTheme    : 'default',
    footerTheme     : 'default'
};

const FuseDefaultSettings = _.merge({}, defaultSettings, FuseSettingsConfig);

export default FuseDefaultSettings;