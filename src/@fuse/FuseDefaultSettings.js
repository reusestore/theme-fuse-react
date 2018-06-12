import _ from 'lodash';
import FuseSettingsConfig from 'fuse-configs/fuseSettingsConfig';
import queryString from 'query-string';

const defaultSettings = {
    layout          : {
        style : 'layout1',
        config: {
            scroll : 'content',
            navbar : {
                display : true,
                folded  : false,
                position: 'left'
            },
            toolbar: {
                display : true,
                style   : 'fixed',
                position: 'below'
            },
            footer : {
                display : true,
                style   : 'fixed',
                position: 'below'
            },
            mode   : 'fullwidth'
        }
    },
    customScrollbars: true,
    theme           : {
        main   : 'default',
        navbar : 'mainThemeDark',
        toolbar: 'mainThemeLight',
        footer : 'mainThemeDark'
    }
};

const parsedQueryString = queryString.parse(window.location.search);
let FuseSettingsQuery = {};

if ( parsedQueryString && parsedQueryString.defaultSettings )
{
    FuseSettingsQuery = JSON.parse(parsedQueryString.defaultSettings);
}

const FuseDefaultSettings = _.merge({}, defaultSettings, FuseSettingsConfig, FuseSettingsQuery);

// Generating route params from settings
/*
const settings = queryString.stringify({
    defaultSettings: JSON.stringify(defaultSettings)
});
console.info(settings);
*/

export default FuseDefaultSettings;