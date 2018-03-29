import _ from 'lodash';
import FuseSettings from 'fuse-configs/fuseSettings';

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

const FuseDefaultSettings = _.merge({}, defaultSettings, FuseSettings);

export default FuseDefaultSettings;