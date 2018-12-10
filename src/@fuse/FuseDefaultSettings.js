import _ from '@lodash';
import qs from 'qs';
import FuseSettingsConfig from 'fuse-configs/fuseSettingsConfig';
import FuseLayoutConfigs from 'fuse-layouts/FuseLayoutConfigs';

const defaultSettings = {
    layout          : {
        style : 'layout1',
        config: FuseLayoutConfigs.layout1.defaults
    },
    customScrollbars: true,
    theme           : {
        main   : 'default',
        navbar : 'mainThemeDark',
        toolbar: 'mainThemeLight',
        footer : 'mainThemeDark'
    }
};

const parsedQueryString = qs.parse(window.location.search, {ignoreQueryPrefix: true});
let FuseSettingsQuery = {};

if ( parsedQueryString && parsedQueryString.defaultSettings )
{
    FuseSettingsQuery = JSON.parse(parsedQueryString.defaultSettings);
}

const FuseDefaultSettings = _.merge({}, defaultSettings, FuseSettingsConfig, FuseSettingsQuery);

// Generating route params from settings
/*const settings = qs.stringify({
    defaultSettings: JSON.stringify(defaultSettings, {strictNullHandling: true})
});
console.info(settings);*/

export default FuseDefaultSettings;
