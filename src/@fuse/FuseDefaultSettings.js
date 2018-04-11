import _ from 'lodash';
import FuseSettingsConfig from 'fuse-configs/fuseSettingsConfig';

const defaultSettings = {
    layout          : {
        navigation          : 'left', // 'right', 'left', 'top', 'none'
        navigationFolded    : false, // true, false
        navigationFoldedOpen: false,
        toolbar             : 'below', // 'above', 'below', 'none'
        footer              : 'below', // 'above', 'below', 'none'
        mode                : 'fullwidth' // 'boxed', 'fullwidth'
    },
    customScrollbars: true,
    theme           : 'default',
    navbarTheme     : 'default',
    toolbarTheme    : 'default',
    footerTheme     : 'default'
};

const FuseDefaultSettings = _.merge({}, defaultSettings, FuseSettingsConfig);

export default FuseDefaultSettings;